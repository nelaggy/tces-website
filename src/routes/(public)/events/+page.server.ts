import type { PageServerLoad } from "./$types";
import { getEventCount, getEvents } from "$lib/server/events/get";

export const load : PageServerLoad = async () => {
  const events = await getEvents();
  const eventCount = await getEventCount();
  return {
    events,
    eventCount
  };
};