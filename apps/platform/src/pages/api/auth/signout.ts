import type { APIRoute } from "astro";
import { buildRedirect, getLandingUrl } from "../../../lib/auth";
import { supabaseClient } from "../../../lib/supabase";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const supabase = supabaseClient(cookies);
  await supabase.auth.signOut();
  return redirect(buildRedirect(getLandingUrl(), "/"));
};

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const supabase = supabaseClient(cookies);
  await supabase.auth.signOut();
  return redirect(buildRedirect(getLandingUrl(), "/"));
};
