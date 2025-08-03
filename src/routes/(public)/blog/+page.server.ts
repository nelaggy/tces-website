import type { PageServerLoad } from "./$types";
import { getPostCount, getPosts } from "./get.remote";

export const load : PageServerLoad = async () => {
  const posts = await getPosts();
  const postCount = await getPostCount();
  return {
    posts,
    postCount
  };
}