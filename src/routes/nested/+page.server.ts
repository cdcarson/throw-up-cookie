import { getSignedInUser } from '../../lib/auth';
import type { RequestEvent } from './$types';

export const load = (event: RequestEvent) => {
  return { user: getSignedInUser(event) };
};
