import { getBlogPosts } from '@/lib/blogger';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
} 