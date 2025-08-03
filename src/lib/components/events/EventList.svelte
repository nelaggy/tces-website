<script lang="ts">
  import EventCard from './EventCard.svelte';
  
  type Event = {
    title: string;
    preview: string;
    href: string;
    location: string;
    date?: string;
    time?: string;
  };

  let { events = [], eventsPerPage = 6 }: { events?: Event[]; eventsPerPage?: number } = $props();

  let currentPage = $state(1);
  
  // Calculate pagination values using $derived
  const totalPages = $derived(Math.ceil(events.length / eventsPerPage));
  const startIndex = $derived((currentPage - 1) * eventsPerPage);
  const endIndex = $derived(startIndex + eventsPerPage);
  const showPagination = $derived(events.length > eventsPerPage);
  
  // Create placeholder events to maintain consistent 2-row layout (6 events)
  const displayEvents = $derived((() => {
    const eventsForPage = events.slice(startIndex, endIndex);
    const placeholders = Array(Math.max(0, eventsPerPage - eventsForPage.length)).fill(null);
    return [...eventsForPage, ...placeholders];
  })());
  
  // Calculate visible page numbers (max 3 pages)
  const visiblePageNumbers = $derived((() => {
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  })());
  
  // Pagination functions
  function goToPage(page: number) {
    currentPage = page;
    // Scroll to top of events section
    document.querySelector('#events-section')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  function previousPage() {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }
  
  function nextPage() {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }
</script>

<section id="events-section" class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    {#if events.length > 0}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each displayEvents as event}
          {#if event !== null}
            <EventCard 
              title={event.title} 
              preview={event.preview} 
              href={event.href}
              location={event.location}
              date={event.date || 'Date TBD'}
              time={event.time || 'Time TBD'}
            />
          {:else}
            <!-- Invisible placeholder to maintain grid layout -->
            <div class="invisible">
              <div class="rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
                <span class="inline-block rounded bg-sky-800 p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </span>
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">Placeholder</h3>
                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">Placeholder text</p>
                <span class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-800">
                  Find out more &rarr;
                </span>
              </div>
            </div>
          {/if}
        {/each}
      </div>
      
      {#if showPagination}
        <div class="mt-8 flex items-center justify-center space-x-2">
          <!-- Previous Button -->
          <button
            onclick={previousPage}
            disabled={currentPage === 1}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg class="w-3.5 h-3.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <!-- Page Numbers -->
          <div class="flex space-x-1">
            <!-- Show first page if not visible -->
            {#if visiblePageNumbers[0] > 1}
              <button
                onclick={() => goToPage(1)}
                class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </button>
              {#if visiblePageNumbers[0] > 2}
                <span class="px-2 py-2 text-sm text-gray-400">...</span>
              {/if}
            {/if}
            
            <!-- Visible page numbers -->
            {#each visiblePageNumbers as pageNumber}
              <button
                onclick={() => goToPage(pageNumber)}
                class={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === pageNumber
                    ? 'bg-sky-800 text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                {pageNumber}
              </button>
            {/each}
            
            <!-- Show last page if not visible -->
            {#if visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages}
              {#if visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages - 1}
                <span class="px-2 py-2 text-sm text-gray-400">...</span>
              {/if}
              <button
                onclick={() => goToPage(totalPages)}
                class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                {totalPages}
              </button>
            {/if}
          </div>
          
          <!-- Next Button -->
          <button
            onclick={nextPage}
            disabled={currentPage === totalPages}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <!-- Page Info -->
        <div class="mt-4 text-center text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(endIndex, events.length)} of {events.length} events
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
