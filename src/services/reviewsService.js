import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs
} from "firebase/firestore";
import { getInitials } from "../components/InitialsAvatar";

// Read Firebase Configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCafegalaxyRealtimeKey2026Db",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "cafegalaxy-dindigul.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "cafegalaxy-dindigul",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "cafegalaxy-dindigul.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "9360151808",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:9360151808:web:cafegalaxy2026db"
};

// Verify presence of environment variables
export const verifyFirebaseEnv = () => {
  const requiredKeys = [
    "VITE_FIREBASE_API_KEY",
    "VITE_FIREBASE_PROJECT_ID",
    "VITE_FIREBASE_APP_ID",
    "VITE_FIREBASE_AUTH_DOMAIN",
    "VITE_FIREBASE_STORAGE_BUCKET"
  ];
  const missing = requiredKeys.filter((key) => !import.meta.env[key]);
  if (missing.length > 0) {
    console.warn("Missing Firebase environment variables:", missing.join(", "));
  } else {
    console.log("All Firebase environment variables verified.");
  }
  return missing;
};

// Initialize Firebase App instance
let app;
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  console.log("Firebase App Initialized successfully with Project ID:", firebaseConfig.projectId);
} catch (e) {
  console.error("Firebase Initialization Error:", e);
}

export const db = getFirestore(app);
const REVIEWS_COLLECTION = "reviews";

/**
 * Real-time listener for reviews from Cloud Database (Firestore).
 * - NO localStorage or sessionStorage used.
 * - Streams live updates to every connected visitor on every device instantly via Firestore onSnapshot.
 */
export const subscribeToCloudReviews = (onSuccess, onError, initialSeed = [], pageSize = 50) => {
  try {
    const reviewsRef = collection(db, REVIEWS_COLLECTION);
    const q = query(reviewsRef, orderBy("createdAt", "desc"), limit(pageSize));

    console.log("Connecting to Firebase Cloud Database (Firestore)...");

    const unsubscribe = onSnapshot(
      q,
      async (snapshot) => {
        console.log(`Loaded ${snapshot.docs.length} reviews from Firestore.`);

        if (snapshot.empty && initialSeed.length > 0) {
          console.log("Database is empty. Seeding initial verified reviews to Cloud Database...");
          try {
            for (const review of initialSeed.slice().reverse()) {
              const name = review.name || "Anonymous Guest";
              await addDoc(reviewsRef, {
                name: name,
                initials: getInitials(name),
                location: review.location || "Dindigul",
                rating: Number(review.rating) || 5,
                review: review.text || review.review || "",
                text: review.text || review.review || "",
                createdAt: review.createdAt || new Date().toISOString(),
                approved: true,
                source: "website"
              });
            }
          } catch (seedErr) {
            console.warn("Seeding deferred:", seedErr);
          }
          return;
        }

        const reviewsList = snapshot.docs.map((doc) => {
          const data = doc.data();
          const name = data.name || "Anonymous Guest";
          return {
            id: doc.id,
            name: name,
            initials: data.initials || getInitials(name),
            location: data.location || "Dindigul",
            rating: Number(data.rating) || 5,
            review: data.review || data.text || "",
            text: data.text || data.review || "",
            createdAt: data.createdAt?.toDate
              ? data.createdAt.toDate().toISOString()
              : data.createdAt || new Date().toISOString(),
            approved: data.approved !== undefined ? data.approved : true,
            source: data.source || "website"
          };
        });

        onSuccess(reviewsList, snapshot.docs[snapshot.docs.length - 1]);
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error.code, error.message);
        if (onError) onError(error);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.error("Failed to establish real-time Firestore subscription:", err);
    if (onError) onError(err);
    return () => {};
  }
};

/**
 * Paginated cursor fetch for loading additional reviews from Firestore
 */
export const fetchMoreCloudReviews = async (lastDoc, pageSize = 10) => {
  try {
    const reviewsRef = collection(db, REVIEWS_COLLECTION);
    let q;
    if (lastDoc) {
      q = query(reviewsRef, orderBy("createdAt", "desc"), startAfter(lastDoc), limit(pageSize));
    } else {
      q = query(reviewsRef, orderBy("createdAt", "desc"), limit(pageSize));
    }

    const snapshot = await getDocs(q);
    const newItems = snapshot.docs.map((doc) => {
      const data = doc.data();
      const name = data.name || "Anonymous Guest";
      return {
        id: doc.id,
        name: name,
        initials: data.initials || getInitials(name),
        location: data.location || "Dindigul",
        rating: Number(data.rating) || 5,
        review: data.review || data.text || "",
        text: data.text || data.review || "",
        createdAt: data.createdAt?.toDate
          ? data.createdAt.toDate().toISOString()
          : data.createdAt || new Date().toISOString(),
        approved: data.approved !== undefined ? data.approved : true,
        source: data.source || "website"
      };
    });

    return {
      reviews: newItems,
      lastDoc: snapshot.docs[snapshot.docs.length - 1],
      hasMore: snapshot.docs.length === pageSize
    };
  } catch (err) {
    console.error("Failed to fetch more cloud reviews:", err);
    return { reviews: [], lastDoc: null, hasMore: false };
  }
};

/**
 * Writes a new review directly to Cloud Database (Firestore).
 * Saves to Firestore first, then broadcasts to all connected devices in real time.
 */
export const postCloudReview = async (reviewData) => {
  const reviewsRef = collection(db, REVIEWS_COLLECTION);
  const name = reviewData.name.trim();
  const text = reviewData.text.trim();
  
  const payload = {
    name: name,
    initials: getInitials(name),
    location: reviewData.location || "Dindigul Guest",
    rating: Number(reviewData.rating),
    review: text,
    text: text,
    createdAt: new Date().toISOString(),
    approved: true,
    source: "website"
  };

  console.log("Submitting review...", payload);
  try {
    const docRef = await addDoc(reviewsRef, payload);
    console.log("Successfully written to Firebase Cloud Database with Doc ID:", docRef.id);
    return { id: docRef.id, ...payload };
  } catch (err) {
    console.error("Firestore write failure:", err.code, err.message, err);
    throw err;
  }
};
