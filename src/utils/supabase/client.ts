import { createBrowserClient } from "@supabase/ssr";

const DEFAULT_SUPABASE_URL = "https://hvmkmzyurlljmjzcljno.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_9PzjXmB9zeyrJoTTUPPF7g_1oCWZZ5k";

const getEnv = (key: string): string => {
  if (typeof import.meta !== "undefined" && (import.meta as any).env && (import.meta as any).env[key]) {
    return (import.meta as any).env[key];
  }
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key]!;
  }
  return "";
};

const supabaseUrl = getEnv("VITE_SUPABASE_URL") || getEnv("NEXT_PUBLIC_SUPABASE_URL") || getEnv("SUPABASE_URL") || DEFAULT_SUPABASE_URL;
const supabaseKey = getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || getEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") || getEnv("SUPABASE_PUBLISHABLE_KEY") || DEFAULT_SUPABASE_KEY;

let clientInstance: ReturnType<typeof createBrowserClient> | null = null;

export const createClient = () => {
  if (clientInstance) return clientInstance;
  clientInstance = createBrowserClient(supabaseUrl, supabaseKey);
  return clientInstance;
};
