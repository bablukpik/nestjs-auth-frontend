'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AUTH_COOKIE, REFRESH_COOKIE } from './auth-cookie';
import { getAuthCookie } from './auth-cookie';

export async function login(_prevState: any, formData: FormData) {
  const res = await fetch(`${process.env.API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  if (!res.ok) {
    return { error: 'Credentials are not valid.' };
  }
  const cookie = getAuthCookie(res);
  if (cookie?.accessToken) {
    cookies().set(cookie.accessToken);
  }
  if (cookie?.refreshToken) {
    cookies().set(cookie.refreshToken);
  }
  redirect('/');
}

export async function logout() {
  // Call backend to invalidate the token
  await fetch(`${process.env.API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      Cookie: cookies().toString(),
    },
  });

  // Remove cookies
  cookies().delete(AUTH_COOKIE);
  cookies().delete(REFRESH_COOKIE);

  redirect('/auth/login');
}
