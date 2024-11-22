import { Metadata } from 'next';
import BlogPostPage from '@/components/blog/BlogPostPage';
import { getBlogPosts, getBlogPost } from '@/lib/blogger';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    const validPosts = posts.filter(post => {
      return post.id && typeof post.id === 'string' && post.id !== '[id]';
    });

    return validPosts.map(post => ({
      id: post.id.toString()
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const post = await getBlogPost(params.id);
    
    if (!post) {
      return {
        title: '404 - المقال غير موجود | علي إسماعيل',
        description: 'عذراً، المقال الذي تبحث عنه غير موجود.'
      };
    }

    const cleanDescription = post.content
      .replace(/<[^>]+>/g, '')
      .substring(0, 160) + '...';

    const imageMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
    const firstImage = imageMatch ? imageMatch[1] : '/images/default-blog.jpg';

    const keywords: string[] = [
      'تصميم جرافيك',
      'علي إسماعيل',
      ...post.title.split(' '),
      post.category || 'تصميم'
    ].filter((keyword): keyword is string => Boolean(keyword));

    return {
      title: `${post.title} | علي إسماعيل`,
      description: cleanDescription,
      keywords: keywords,
      authors: [{ name: 'علي إسماعيل' }],
      openGraph: {
        title: post.title,
        description: cleanDescription,
        type: 'article',
        publishedTime: post.published,
        modifiedTime: post.isUpdated ? post.published : undefined,
        authors: ['علي إسماعيل'],
        images: [
          {
            url: firstImage,
            width: 1200,
            height: 630,
            alt: post.title
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: cleanDescription,
        images: [firstImage]
      },
      alternates: {
        canonical: `https://3lismaeel.xyz/blog/${params.id}`
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'خطأ | علي إسماعيل',
      description: 'حدث خطأ أثناء تحميل المقال'
    };
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  if (!params.id || params.id === '[id]') {
    return (
      <div className="error-container">
        <h1>404 - الصفحة غير موجودة</h1>
        <p>عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
        <Link href="/blog" className="error-link">العودة للمدونة</Link>
      </div>
    );
  }

  try {
    const post = await getBlogPost(params.id);
    
    if (!post) {
      return (
        <div className="error-container">
          <h1>404 - المقال غير موجود</h1>
          <p>عذراً، المقال الذي تبحث عنه غير موجود.</p>
          <Link href="/blog" className="error-link">العودة للمدونة</Link>
        </div>
      );
    }

    return <BlogPostPage postId={params.id} />;

  } catch (error) {
    console.error('Error loading blog post:', error);
    return (
      <div className="error-container">
        <h1>خطأ في التحميل</h1>
        <p>عذراً، حدث خطأ أثناء تحميل المقال. يرجى المحاولة مرة أخرى.</p>
        <Link href="/blog" className="error-link">العودة للمدونة</Link>
      </div>
    );
  }
} 