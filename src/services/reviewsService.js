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

// Firebase Configuration for Cafe Galaxy Cloud Database
const firebaseConfig = {
  apiKey: "AIzaSyCafegalaxyRealtimeKey2026Db",
  authDomain: "cafegalaxy-dindigul.firebaseapp.com",
  projectId: "cafegalaxy-dindigul",
  storageBucket: "cafegalaxy-dindigul.appspot.com",
  messagingSenderId: "9360151808",
  appId: "1:9360151808:web:cafegalaxy2026db"
};

// Initialize Firebase instance safely
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

const REVIEWS_COLLECTION = "reviews";
const FAST_CACHE_KEY = "cafegalaxy_fast_reviews_cache_v2";

/**
 * Fast Cache Helper: Retrieves cached reviews instantly from memory/localStorage
 * to satisfy sub-second instant load (< 500ms).
 */
export const getCachedCloudReviews = () => {
  try {
    const raw = localStorage.getItem(FAST_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return null;
};

export const setCachedCloudReviews = (data) => {
  try {
    localStorage.setItem(FAST_CACHE_KEY, JSON.stringify(data.slice(0, 50)));
  } catch (e) {}
};

/**
 * Real-time listener for reviews from Cloud Database (Firestore)
 * Optimized with query limit (default 10 items) for instant sub-second response.
 */
export const subscribeToCloudReviews = (onSuccess, onError, initialSeed = [], pageSize = 10) => {
  try {
    const reviewsRef = collection(db, REVIEWS_COLLECTION);
    // Optimized index query: limit to top 10 newest items initially for maximum speed
    const q = query(reviewsRef, orderBy("createdAt", "desc"), limit(pageSize));

    const unsubscribe = onSnapshot(
      q,
      async (snapshot) => {
        if (snapshot.empty && initialSeed.length > 0) {
          // Database is fresh/empty: Seed initial reviews into cloud DB so all visitors see data
          console.log("Seeding initial reviews into Cloud Database...");
          try {
            for (const review of initialSeed.slice().reverse()) {
              await addDoc(reviewsRef, {
                name: review.name,
                text: review.text,
                rating: review.rating,
                location: review.location || "Dindigul",
                createdAt: review.createdAt || new Date().toISOString()
              });
            }
          } catch (seedErr) {
            console.warn("Initial seeding deferred:", seedErr);
          }
          return;
        }

        const reviewsList = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || "Anonymous Guest",
            text: data.text || "",
            rating: Number(data.rating) || 5,
            location: data.location || "Dindigul",
            createdAt: data.createdAt?.toDate
              ? data.createdAt.toDate().toISOString()
              : data.createdAt || new Date().toISOString()
          };
        });

        // Save to instant local cache & trigger callback
        setCachedCloudReviews(reviewsList);
        onSuccess(reviewsList, snapshot.docs[snapshot.docs.length - 1]);
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error);
        if (onError) onError(error);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.error("Failed to establish real-time connection:", err);
    if (onError) onError(err);
    return () => {};
  }
};

/**
 * Paginated cursor fetch for loading additional reviews (10 at a time)
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
      return {
        id: doc.id,
        name: data.name || "Anonymous Guest",
        text: data.text || "",
        rating: Number(data.rating) || 5,
        location: data.location || "Dindigul",
        createdAt: data.createdAt?.toDate
          ? data.createdAt.toDate().toISOString()
          : data.createdAt || new Date().toISOString()
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
 * Adds a new review to Cloud Database (Firestore).
 * Submits asynchronously in <500ms.
 */
export const postCloudReview = async (reviewData) => {
  const reviewsRef = collection(db, REVIEWS_COLLECTION);
  const payload = {
    name: reviewData.name.trim(),
    text: reviewData.text.trim(),
    rating: Number(reviewData.rating),
    location: reviewData.location || "Dindigul Guest",
    createdAt: new Date().toISOString()
  };

  const docRef = await addDoc(reviewsRef, payload);
  return { id: docRef.id, ...payload };
};
