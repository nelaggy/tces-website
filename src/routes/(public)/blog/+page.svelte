<script lang="ts">
  import PostList from '$lib/components/blog/PostList.svelte';
  import { getPosts } from "./get.remote";

  const { data } = $props();
  const posts = data.posts;
  const postCount = data.postCount;
</script>

<header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Articles</h1>
  
          <p class="mt-1.5 text-sm text-gray-500">
            Explore our collection of articles written by TCES members.
          </p>
        </div>
      </div>
    </div>
  </header>

<PostList {posts} {postCount} loader={getPosts} />