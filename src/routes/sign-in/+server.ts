import { signIn } from '../../lib/auth';
import type { RequestEvent } from './$types';

export const GET = (event: RequestEvent) => {
  signIn(event);
};
