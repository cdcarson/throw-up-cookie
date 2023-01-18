import { redirect, type RequestEvent } from '@sveltejs/kit';

export const AUTH_COOKIE_NAME = 'yukketyyuk';

export const signIn = (event: RequestEvent) => {
  event.cookies.set(AUTH_COOKIE_NAME, 'ipecac', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true
  });

  throw redirect(303, '/');
};

export const signOut = (event: RequestEvent) => {
  event.cookies.delete(AUTH_COOKIE_NAME);
  throw redirect(303, '/');
};

export const getSignedInUser = (event: RequestEvent): 'ipecac' | null => {
  return event.cookies.get(AUTH_COOKIE_NAME) === 'ipecac' ? 'ipecac' : null;
};
