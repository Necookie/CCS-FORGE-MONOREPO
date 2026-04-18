const DEFAULT_LANDING_URL = "http://localhost:4321";
const DEFAULT_PLATFORM_URL = "http://localhost:4322";

const getRequiredEnv = (
  name: "PUBLIC_SUPABASE_URL" | "PUBLIC_SUPABASE_ANON_KEY",
) => {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export const getSupabaseEnv = () => ({
  url: getRequiredEnv("PUBLIC_SUPABASE_URL"),
  anonKey: getRequiredEnv("PUBLIC_SUPABASE_ANON_KEY"),
});

const normalizeUrl = (value: string | undefined, fallback: string) => {
  try {
    return new URL(value ?? fallback);
  } catch {
    return new URL(fallback);
  }
};

export const getLandingUrl = () =>
  normalizeUrl(import.meta.env.PUBLIC_LANDING_URL, DEFAULT_LANDING_URL);

export const getPlatformUrl = () =>
  normalizeUrl(import.meta.env.PUBLIC_PLATFORM_URL, DEFAULT_PLATFORM_URL);

export const buildRedirect = (
  base: URL,
  path: string,
  params?: Record<string, string | null | undefined>,
) => {
  const url = new URL(path, base);

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
};
