import { BlogPost } from '@/types/blog';

const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID;
const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!BLOG_ID || !API_KEY) {
      console.warn('Missing BLOG_ID or API_KEY');
      return [];
    }

    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=500`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    
    if (!data.items) {
      return [];
    }

    return data.items.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
      imageUrl: extractFirstImage(post.content),
      createdAt: post.published,
      views: post.metadata?.views?.count || 0,
      isUpdated: new Date(post.updated) > new Date(post.published),
      category: post.labels?.[0] || 'عام'
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(id: string | null): Promise<BlogPost | null> {
  try {
    if (!id || !BLOG_ID || !API_KEY) return null;
    
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const data = await response.json();
    
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      published: data.published,
      imageUrl: extractFirstImage(data.content),
      readingTime: calculateReadingTime(data.content),
      isUpdated: new Date(data.updated) > new Date(data.published),
      category: data.labels?.[0] || 'تصميم',
      views: 0,
      createdAt: data.published
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

function extractFirstImage(content: string): string {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : '/default-blog-image.jpg';
}

export async function updatePostViews(postId: string) {
  if (!postId || postId === '[id]' || !BLOG_ID || !API_KEY) {
    return false;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: postId,
          metadata: {
            views: {
              count: 1,
              type: 'INCREMENT'
            }
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update views');
    }

    return true;
  } catch (error) {
    console.error('Error updating views:', error);
    return false;
  }
}

const calculateReadingTime = (content: string): string => {
  const plainText = content.replace(/<[^>]+>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 250);
  
  if (minutes < 1) return 'أقل من دقيقة';
  if (minutes === 1) return 'دقيقة واحدة';
  if (minutes === 2) return 'دقيقتان';
  if (minutes <= 10) return `${minutes} دقائق`;
  return `${minutes} دقيقة`;
};