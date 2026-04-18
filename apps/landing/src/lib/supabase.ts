import { createServerClient } from "@supabase/ssr";
import type { AstroCookies } from "astro";
import { getSupabaseEnv } from "./auth";

export const supabaseClient = (cookies: AstroCookies) => {
  const { url, anonKey } = getSupabaseEnv();

  return createServerClient(
    url,
    anonKey,
    {
      cookies: {
        get(key) {
          return cookies.get(key)?.value;
        },
        set(key, value, options) {
          cookies.set(key, value, options);
        },
        remove(key, options) {
          cookies.delete(key, options);
        },
      },
    },
  );
};
