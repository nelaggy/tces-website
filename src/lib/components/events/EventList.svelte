<script lang="ts">
	import type { CalEvent } from '$lib/types/events';
  import EventCard from './EventCard.svelte';

  let { 
    events = [], 
    eventCount,
    loader = (page: number) => Promise.resolve([])
  }: { 
    events?: CalEvent[]; 
    eventCount: number;
    loader: (page: number) => Promise<CalEvent[]>;
  } = $props();

  let page = $state(0);

  // Calculate display values using $derived
  // Load more function
  const loadMore = async () => {
    console.log('Loading more events...');
    const newEvents = await loader(page + 1);
    if (newEvents.length > 0) {
      events = [...events, ...newEvents];
      page += 1;
    }
  }
</script>

<section id="events-section" class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    {#if events.length > 0}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each events as event}
          <EventCard 
            event={event}
          />
        {/each}
      </div>

      {#if events.length < eventCount}
        <div class="mt-8 flex flex-col items-center space-y-4">
          <!-- Load More Button -->
          <button
            onclick={loadMore}
            class="inline-flex items-center px-6 py-3 text-sm font-medium text-sky-800 rounded-lg hover:text-sky-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Load More Events
          </button>
        </div>
      {:else}
        <!-- All events loaded message -->
        <div class="mt-8 text-center">
          <div class="text-sm text-gray-500 mb-2">
            All events loaded
          </div>
          <div class="w-24 h-0.5 bg-sky-800 mx-auto rounded"></div>
        </div>
      {/if}
    {:else}
      <div class="text-center py-12">
        <h3 class="text-lg font-medium text-gray-900 mb-2">No events available</h3>
        <p class="text-gray-500">Check back later for new events!</p>
      </div>
    {/if}
  </div>
</section>
