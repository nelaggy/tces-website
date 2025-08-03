import type { BlogPost } from "$lib/types/blog";
import db from "$lib/server/db";
import { query } from "$app/server";

export const getPosts = query(async (page = 0) => {
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
});

export const getPostCount = query(async () => {
  const data = await db`
    SELECT COUNT(*) as count FROM posts
  `;
  return data[0].count;
});