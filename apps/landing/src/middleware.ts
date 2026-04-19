import { defineMiddleware } from "astro:middleware";
import { buildRedirect, getPlatformUrl } from "./lib/auth";
import { supabaseClient } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
  const { cookies, redirect, url } = context;
  const isStaticAsset =
    url.pathname.startsWith("/_astro/") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname.startsWith("/robots.txt") ||
    url.pathname.startsWith("/sitemap") ||
    /\.[a-z0-9]+$/i.test(url.pathname);

  if (isStaticAsset || url.pathname.startsWith("/api/auth/")) {
    return next();
  }

  const supabase = supabaseClient(cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return next();
  }

  const nextPath = url.searchParams.get("next");
  const safeNextPath =
    nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//")
      ? nextPath
      : "/";

  return redirect(buildRedirect(getPlatformUrl(), safeNextPath));
});
