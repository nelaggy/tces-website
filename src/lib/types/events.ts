export type CalEvent = {
    title: string;
    starts_at?: string; // ISO date string for the event start time
    location?: string;
    description: string;
    href: string; // Link to the event details page
}