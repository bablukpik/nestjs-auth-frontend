"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, REFRESH_COOKIE } from "./auth-cookie";

export async function logout() {
  // Call backend to invalidate the token
  await fetch(`${process.env.API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  // Remove cookies
  cookies().delete(AUTH_COOKIE);
  cookies().delete(REFRESH_COOKIE);

  redirect("/auth/login");
}
