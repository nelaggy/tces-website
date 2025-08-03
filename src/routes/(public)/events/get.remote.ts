import type { CalEvent } from "$lib/types/events";
import db from "$lib/server/db";
import { query } from "$app/server";
import * as v from "valibot";

export const getEvents = query(v.optional(v.number()), async (page = 0) => {
  const data = await db`
    SELECT * FROM events
    ORDER BY starts_at DESC
    LIMIT 6 OFFSET ${page * 6}
  `;
  const events : CalEvent[] = data.map((event) => ({
    title: event.title as string,
    starts_at: event.starts_at as string,
    location: event.location as string,
    description: event.description as string,
    href: `/events/${event.id}`
  }));
  return events;
});

export const getEventCount = query(async () => {
  const data = await db`
    SELECT COUNT(*) as count FROM events
  `;
  return data[0].count;
});
