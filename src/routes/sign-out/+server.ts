import { signOut } from '../../lib/auth';
import type { RequestEvent } from './$types';

export const GET = (event: RequestEvent) => {
  signOut(event);
};
