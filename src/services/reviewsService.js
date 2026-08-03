import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  serverTimestamp
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

/**
 * Real-time listener for reviews from Cloud Database (Firestore).
 * - Fires whenever a review is added or modified by ANY visitor on ANY device.
 * - Automatically sorts reviews newest first (createdAt descending).
 */
export const subscribeToCloudReviews = (onSuccess, onError, initialSeed = []) => {
  try {
    const reviewsRef = collection(db, REVIEWS_COLLECTION);
    const q = query(reviewsRef, orderBy("createdAt", "desc"));

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

        onSuccess(reviewsList);
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
 * Adds a new review to Cloud Database (Firestore).
 * Instantly broadcasts to all open browsers/devices via Firestore real-time onSnapshot listener.
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
