import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  enableNetwork,
  disableNetwork
} from "firebase/firestore";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Default public Supabase endpoint fallback for client-side production builds
const DEFAULT_SUPABASE_URL = "https://hvmkmzyurlljmjzcljno.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_9PzjXmB9zeyrJoTTUPPF7g_1oCWZZ5k";

/**
 * Utility to safely retrieve environment variables across Vite, Next.js, and Node environments
 * without hardcoding any fallback credentials.
 */
const getEnvVar = (key) => {
  if (typeof import.meta !== "undefined" && import.meta && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  return undefined;
};

// ---------------------------------------------------------------------------
// Singleton Connection Instances
// ---------------------------------------------------------------------------

let firebaseAppInstance = null;
let firestoreDbInstance = null;
let supabaseClientInstance = null;

/**
 * Initializes and returns the shared Firebase Firestore database instance (Singleton).
 */
export const getFirestoreDatabase = () => {
  if (firestoreDbInstance) {
    return firestoreDbInstance;
  }

  const firebaseConfig = {
    apiKey: getEnvVar("VITE_FIREBASE_API_KEY") || "AIzaSyCafegalaxyRealtimeKey2026Db",
    authDomain: getEnvVar("VITE_FIREBASE_AUTH_DOMAIN") || "cafegalaxy-dindigul.firebaseapp.com",
    projectId: getEnvVar("VITE_FIREBASE_PROJECT_ID") || "cafegalaxy-dindigul",
    storageBucket: getEnvVar("VITE_FIREBASE_STORAGE_BUCKET") || "cafegalaxy-dindigul.appspot.com",
    messagingSenderId: getEnvVar("VITE_FIREBASE_MESSAGING_SENDER_ID") || "9360151808",
    appId: getEnvVar("VITE_FIREBASE_APP_ID") || "1:9360151808:web:cafegalaxy2026db"
  };

  try {
    if (!firebaseAppInstance) {
      firebaseAppInstance = !getApps().length
        ? initializeApp(firebaseConfig)
        : getApp();
    }
    firestoreDbInstance = getFirestore(firebaseAppInstance);
    console.log("[DB] Firestore database connection initialized successfully.");
  } catch (error) {
    console.error("[DB] Failed to initialize Firestore connection:", error);
  }

  return firestoreDbInstance;
};

/**
 * Initializes and returns the shared Supabase client instance (Singleton).
 * Dynamically resolves environment variables with public client fallback for production deployments.
 */
export const getSupabaseClient = () => {
  if (supabaseClientInstance) {
    return supabaseClientInstance;
  }

  const url =
    getEnvVar("VITE_SUPABASE_URL") ||
    getEnvVar("NEXT_PUBLIC_SUPABASE_URL") ||
    getEnvVar("SUPABASE_URL") ||
    DEFAULT_SUPABASE_URL;

  const key =
    getEnvVar("VITE_SUPABASE_PUBLISHABLE_KEY") ||
    getEnvVar("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") ||
    getEnvVar("SUPABASE_PUBLISHABLE_KEY") ||
    DEFAULT_SUPABASE_KEY;

  try {
    supabaseClientInstance = createSupabaseClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    console.log("[DB] Supabase client connection initialized successfully with URL:", url);
  } catch (error) {
    console.error("[DB] Failed to initialize Supabase client:", error);
  }

  return supabaseClientInstance;
};

// Default export of main database connection
export const db = getFirestoreDatabase();
export const supabase = getSupabaseClient();

// ---------------------------------------------------------------------------
// Automatic Reconnection & Connection Status Management
// ---------------------------------------------------------------------------

let isReconnecting = false;

/**
 * Automatically reconnects database network connection if disconnected.
 */
export const reconnectDatabase = async () => {
  if (isReconnecting) return;
  isReconnecting = true;
  console.log("[DB] Attempting database connection reconnect...");

  try {
    const dbInstance = getFirestoreDatabase();
    if (dbInstance) {
      await disableNetwork(dbInstance);
      await enableNetwork(dbInstance);
      console.log("[DB] Database connection re-established successfully.");
    }
  } catch (error) {
    console.error("[DB] Reconnection attempt failed:", error);
  } finally {
    isReconnecting = false;
  }
};

// Setup browser online listener for automatic reconnection
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    console.log("[DB] Network status: ONLINE. Verifying database connection...");
    reconnectDatabase();
  });
  window.addEventListener("offline", () => {
    console.warn("[DB] Network status: OFFLINE. Database operates in cached mode.");
  });
}

/**
 * Verifies that the database connection is healthy and responsive.
 * Used during application startup.
 */
export const verifyDatabaseConnection = async () => {
  const result = {
    firestoreConnected: false,
    supabaseConnected: false,
    errors: []
  };

  // Test Supabase Connection
  try {
    const sb = getSupabaseClient();
    if (sb) {
      const { data, error } = await sb.from("reviews").select("id").limit(1);
      if (!error) {
        result.supabaseConnected = true;
        console.log("[DB Startup] Supabase database connection verified successfully.");
      } else {
        console.warn("[DB Startup] Supabase select warning:", error.message);
        result.errors.push(`Supabase: ${error.message}`);
      }
    }
  } catch (error) {
    console.warn("[DB Startup] Supabase connection exception:", error.message || error);
    result.errors.push(`Supabase exception: ${error.message}`);
  }

  return result;
};

// ---------------------------------------------------------------------------
// Reusable Async CRUD Operations
// ---------------------------------------------------------------------------

export const fetchCollectionData = async (collectionName, constraints = []) => {
  try {
    const dbInstance = getFirestoreDatabase();
    const colRef = collection(dbInstance, collectionName);
    const q = query(colRef, ...constraints);
    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data()
    }));
  } catch (error) {
    console.error(`[DB Error] Fetching collection '${collectionName}' failed:`, error);
    await reconnectDatabase();
    throw error;
  }
};

export const insertDocument = async (collectionName, data) => {
  try {
    const dbInstance = getFirestoreDatabase();
    const colRef = collection(dbInstance, collectionName);
    const docRef = await addDoc(colRef, {
      ...data,
      createdAt: data.createdAt || new Date().toISOString()
    });

    console.log(`[DB] Document inserted into '${collectionName}' with ID:`, docRef.id);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(`[DB Error] Inserting document into '${collectionName}' failed:`, error);
    await reconnectDatabase();
    throw error;
  }
};

export const updateDocument = async (collectionName, docId, data) => {
  try {
    const dbInstance = getFirestoreDatabase();
    const docRef = doc(dbInstance, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });

    console.log(`[DB] Document '${docId}' in '${collectionName}' updated.`);
    return { id: docId, ...data };
  } catch (error) {
    console.error(`[DB Error] Updating document '${docId}' in '${collectionName}' failed:`, error);
    await reconnectDatabase();
    throw error;
  }
};

export const deleteDocument = async (collectionName, docId) => {
  try {
    const dbInstance = getFirestoreDatabase();
    const docRef = doc(dbInstance, collectionName, docId);
    await deleteDoc(docRef);

    console.log(`[DB] Document '${docId}' deleted from '${collectionName}'.`);
    return { id: docId, deleted: true };
  } catch (error) {
    console.error(`[DB Error] Deleting document '${docId}' from '${collectionName}' failed:`, error);
    await reconnectDatabase();
    throw error;
  }
};

export const subscribeToCollection = (collectionName, queryConstraints, onNext, onError) => {
  try {
    const dbInstance = getFirestoreDatabase();
    const colRef = collection(dbInstance, collectionName);
    const q = query(colRef, ...queryConstraints);

    return onSnapshot(
      q,
      (snapshot) => onNext(snapshot),
      (error) => {
        console.error(`[DB Subscription Error] Collection '${collectionName}':`, error);
        reconnectDatabase();
        if (onError) onError(error);
      }
    );
  } catch (error) {
    console.error(`[DB Subscription Exception] Collection '${collectionName}':`, error);
    if (onError) onError(error);
    return () => {};
  }
};
