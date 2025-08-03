import type { PageServerLoad } from "./$types";
import { getPostCount, getPosts } from "$lib/server/blog/get";

export const load : PageServerLoad = async () => {
  const posts = await getPosts();
  const postCount = await getPostCount();
  return {
    posts,
    postCount
  };
}