import { getSupabaseClient } from "./db.js";
import { getInitials } from "../components/InitialsAvatar";

const TABLE_NAME = "reviews";

/**
 * Maps a Supabase database row to the review object structure used in the UI.
 */
const mapRowToReview = (row) => {
  if (!row) return null;
  const name = row.name || "Anonymous Guest";
  return {
    id: row.id,
    name: name,
    initials: row.initials || getInitials(name),
    location: row.location || "Dindigul",
    rating: Number(row.rating) || 5,
    review: row.review || row.text || "",
    text: row.text || row.review || "",
    createdAt: row.created_at || row.createdAt || new Date().toISOString(),
    approved: row.approved !== undefined ? row.approved : true,
    source: row.source || "website",
    badge: row.badge
  };
};

/**
 * Environment variable verification helper for Supabase connection.
 */
export const verifyFirebaseEnv = () => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    console.warn("[Supabase] Client not initialized. Please verify environment variables.");
    return ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"];
  }
  console.log("[Supabase] Client and environment variables verified successfully.");
  return [];
};

/**
 * Fetches all reviews from Supabase table sorted by newest first (created_at DESC).
 */
export const fetchCloudReviews = async (pageSize = 50, offset = 0) => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error("Supabase client is not initialized");
  }

  const { data, error, count } = await supabase
    .from(TABLE_NAME)
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + pageSize - 1);

  if (error) {
    console.error("[Supabase Error] Failed to fetch reviews:", error);
    throw error;
  }

  const reviewsList = (data || []).map(mapRowToReview).filter(Boolean);
  return {
    reviews: reviewsList,
    totalCount: count || reviewsList.length,
    hasMore: (data || []).length === pageSize
  };
};

/**
 * Subscribes to real-time reviews from Supabase.
 * Always uses Supabase as the single source of truth and streams live updates.
 */
export const subscribeToCloudReviews = (onSuccess, onError, initialSeed = [], pageSize = 50) => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    console.warn("[Supabase] Client unavailable for real-time subscription.");
    if (onError) onError(new Error("Supabase client unavailable"));
    return () => {};
  }

  let isSubscribed = true;

  // 1. Initial async fetch from Supabase
  const loadInitialData = async () => {
    try {
      console.log("[Supabase] Fetching initial reviews from database...");
      const { reviews } = await fetchCloudReviews(pageSize, 0);
      if (isSubscribed) {
        console.log(`[Supabase] Loaded ${reviews.length} reviews from Supabase.`);
        onSuccess(reviews, pageSize);
      }
    } catch (err) {
      console.error("[Supabase Subscription Error]:", err);
      if (isSubscribed && onError) onError(err);
    }
  };

  loadInitialData();

  // 2. Set up Supabase Realtime channel for live multi-device synchronization
  const channel = supabase
    .channel("public-reviews-realtime")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: TABLE_NAME },
      async (payload) => {
        console.log("[Supabase Realtime] Change detected in reviews table:", payload.eventType);
        try {
          const { reviews } = await fetchCloudReviews(pageSize, 0);
          if (isSubscribed) {
            onSuccess(reviews, pageSize);
          }
        } catch (err) {
          console.error("[Supabase Realtime Error] Refresh failed:", err);
        }
      }
    )
    .subscribe((status) => {
      console.log(`[Supabase Realtime] Subscription status: ${status}`);
    });

  // Return unsubscribe cleanup function
  return () => {
    isSubscribed = false;
    supabase.removeChannel(channel);
  };
};

/**
 * Paginated fetch for loading additional reviews from Supabase.
 */
export const fetchMoreCloudReviews = async (currentOffset = 10, pageSize = 10) => {
  try {
    const offset = typeof currentOffset === "number" ? currentOffset : 10;
    const { reviews, hasMore } = await fetchCloudReviews(pageSize, offset);

    return {
      reviews,
      lastDoc: offset + reviews.length,
      hasMore
    };
  } catch (err) {
    console.error("[Supabase Error] Failed to fetch more reviews:", err);
    return { reviews: [], lastDoc: currentOffset, hasMore: false };
  }
};

/**
 * Inserts a new review permanently into the Supabase database.
 * Validates fields and uses async/await.
 */
export const postCloudReview = async (reviewData) => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error("Supabase client is not initialized.");
  }

  const name = (reviewData.name || "").trim();
  const text = (reviewData.text || reviewData.review || "").trim();
  const rating = Number(reviewData.rating) || 5;

  if (!name) {
    throw new Error("Please enter your name.");
  }
  if (!text) {
    throw new Error("Please write your review.");
  }
  if (rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5.");
  }

  const payload = {
    name: name,
    initials: getInitials(name),
    location: (reviewData.location || "Dindigul Guest").trim(),
    rating: rating,
    review: text,
    text: text,
    created_at: new Date().toISOString(),
    approved: true,
    source: "website"
  };

  console.log("[Supabase] Inserting review into Supabase...", payload);

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert([payload])
    .select();

  if (error) {
    console.error("[Supabase Insert Error]:", error.message || error);
    throw new Error(error.message || "Failed to submit review to database.");
  }

  const insertedRow = Array.isArray(data) ? data[0] : data;
  console.log("[Supabase] Successfully inserted review into database with ID:", insertedRow?.id);
  return mapRowToReview(insertedRow);
};
