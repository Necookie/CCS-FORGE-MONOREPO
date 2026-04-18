import type { APIRoute } from "astro";
import { buildRedirect, getLandingUrl, getPlatformUrl } from "../../../lib/auth";
import { supabaseClient } from "../../../lib/supabase";
import type { EmailOtpType } from "@supabase/supabase-js";

export const GET: APIRoute = async ({ request, url, cookies, redirect }) => {
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;
  const landingUrl = getLandingUrl();
  const platformUrl = getPlatformUrl();
  const successRedirect = buildRedirect(landingUrl, "/login", {
    success: "Email confirmed. You can sign in now.",
  });

  if (token_hash && type) {
    const supabase = supabaseClient(cookies);

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      return redirect(buildRedirect(platformUrl, "/"));
    }

    return redirect(
      buildRedirect(landingUrl, "/login", {
        error:
          error.message === "Token has expired or is invalid"
            ? "This confirmation link was already used. You can sign in now."
            : "Verification failed. Please try signing in again.",
      }),
    );
  }

  return redirect(successRedirect);
};
