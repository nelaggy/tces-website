<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';
  import PostCard from './PostCard.svelte';

  let { 
    posts = [], 
    postCount,
    loader = (page: number) => Promise.resolve([])
  }: { 
    posts?: BlogPost[]; 
    postCount: number;
    loader: (page: number) => Promise<BlogPost[]>;
  } = $props();

  let page = $state(0);

  // Calculate display values using $derived
  // Load more function
  const loadMore = async () => {
    console.log('Loading more articles...');
    const newPosts = await loader(page + 1);
    if (newPosts.length > 0) {
      posts = [...posts, ...newPosts];
      page += 1;
    }
  }
</script>

<section id="events-section" class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    {#if posts.length > 0}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each posts as post}
          <PostCard 
            {post}
          />
        {/each}
      </div>

      {#if posts.length < postCount}
        <div class="mt-8 flex flex-col items-center space-y-4">
          <!-- Load More Button -->
          <button
            onclick={loadMore}
            class="inline-flex items-center px-6 py-3 text-sm font-medium text-sky-800 rounded-lg hover:text-sky-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Load More Articles
          </button>
        </div>
      {:else}
        <!-- All posts loaded message -->
        <div class="mt-8 text-center">
          <div class="text-sm text-gray-500 mb-2">
            All posts loaded
          </div>
          <div class="w-24 h-0.5 bg-sky-800 mx-auto rounded"></div>
        </div>
      {/if}
    {:else}
      <div class="text-center py-12">
        <h3 class="text-lg font-medium text-gray-900 mb-2">No posts available</h3>
        <p class="text-gray-500">Check back later for new posts!</p>
      </div>
    {/if}
  </div>
</section>
