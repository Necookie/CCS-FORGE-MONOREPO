import type { APIRoute } from "astro";
import { buildRedirect, getLandingUrl, getPlatformUrl } from "../../../lib/auth";
import { supabaseClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const nextPath = formData.get("next")?.toString();
  const landingUrl = getLandingUrl();

  if (!email || !password) {
    return redirect(
      buildRedirect(landingUrl, "/login", {
        error: "Email and password are required.",
      }),
    );
  }

  const supabase = supabaseClient(cookies);
  const platformUrl = getPlatformUrl();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(
      buildRedirect(landingUrl, "/login", {
        error: error.message,
      }),
    );
  }

  const safeNextPath =
    nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//")
      ? nextPath
      : "/";

  return redirect(buildRedirect(platformUrl, safeNextPath));
};
