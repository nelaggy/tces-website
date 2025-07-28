<script lang="ts">
  import PostCard from './PostCard.svelte';
  
  type Post = {
    title: string;
    preview: string;
    href: string;
  };

  let { posts = [] }: { posts?: Post[] } = $props();
</script>

<section class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    {#if posts.length > 0}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each posts as post}
          <PostCard 
            title={post.title} 
            preview={post.preview} 
            href={post.href} 
          />
        {/each}
      </div>
    {:else}
      <div class="text-center py-12">
        <h3 class="text-lg font-medium text-gray-900 mb-2">No posts available</h3>
        <p class="text-gray-500">Check back later for new articles!</p>
      </div>
    {/if}
  </div>
</section>
