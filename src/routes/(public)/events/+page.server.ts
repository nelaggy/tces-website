import type { PageServerLoad } from "./$types";
import { getEventCount, getEvents } from "./get.remote";

export const load : PageServerLoad = async () => {
  const events = await getEvents();
  const eventCount = await getEventCount();
  return {
    events,
    eventCount
  };
};