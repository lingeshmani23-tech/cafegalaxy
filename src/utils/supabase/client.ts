import { createBrowserClient } from "@supabase/ssr";

const getEnv = (key: string): string => {
  if (typeof import.meta !== "undefined" && (import.meta as any).env && (import.meta as any).env[key]) {
    return (import.meta as any).env[key];
  }
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key]!;
  }
  return "";
};

const supabaseUrl = getEnv("VITE_SUPABASE_URL") || getEnv("NEXT_PUBLIC_SUPABASE_URL") || getEnv("SUPABASE_URL");
const supabaseKey = getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || getEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") || getEnv("SUPABASE_PUBLISHABLE_KEY");

let clientInstance: ReturnType<typeof createBrowserClient> | null = null;

export const createClient = () => {
  if (clientInstance) return clientInstance;
  clientInstance = createBrowserClient(supabaseUrl, supabaseKey);
  return clientInstance;
};
