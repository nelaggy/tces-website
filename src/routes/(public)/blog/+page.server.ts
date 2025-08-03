import type { PageServerLoad } from "./$types";
import { getPosts } from "$lib/server/blog/get";

export const load : PageServerLoad = async () => {
  const posts = await getPosts();
  return {
    posts
  };
};