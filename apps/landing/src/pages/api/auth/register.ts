import type { APIRoute } from "astro";
import { buildRedirect, getLandingUrl } from "../../../lib/auth";
import { supabaseClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const landingUrl = getLandingUrl();
  const confirmationUrl = buildRedirect(landingUrl, "/api/auth/confirm");

  if (!email || !password) {
    return redirect(
      buildRedirect(landingUrl, "/register", {
        error: "Email and password are required.",
      }),
    );
  }

  const supabase = supabaseClient(cookies);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: confirmationUrl,
    },
  });

  if (error) {
    return redirect(
      buildRedirect(landingUrl, "/register", {
        error: error.message,
      }),
    );
  }

  return redirect(
    buildRedirect(landingUrl, "/register", {
      success: "true",
    }),
  );
};
