import type { BlogPost } from "$lib/types/blog";
import db from "../db";

export const getPosts = async (page = 0) => {
  const data = await db`
    SELECT * FROM posts
    ORDER BY created_at DESC
    LIMIT 6 OFFSET ${page * 6}
  `;
  const posts: BlogPost[] = data.map((post) => ({
    title: post.title,
    content: post.content,
    href: '/blog/' + post.id,
  }))
  return posts;
};
