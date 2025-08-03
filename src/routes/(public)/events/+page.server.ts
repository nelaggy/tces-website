import type { PageServerLoad } from "./$types";
import { getEvents } from "$lib/server/events/get";

export const load : PageServerLoad = async () => {
  const events = await getEvents();
  return {
    events
  };
};