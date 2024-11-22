'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faXmark } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';
import { getBlogPosts, updatePostViews } from '@/lib/blogger';
import ShareDialog from '@/components/ShareDialog';
import ImageWithFallback from '@/components/ImageWithFallback';
import CustomLink from '@/components/CustomLink';
import ImageViewer from '@/components/ImageViewer';
import { BlogPost } from '@/types/blog';
import Image from 'next/image';

const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID;
const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

export default function BlogPostPage({ postId }: { postId: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // جلب المقال الحالي
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }

        const data = await response.json();
        
        // تحديث المشاهدات
        await updatePostViews(postId);
        
        setPost({
          id: data.id,
          title: data.title,
          content: data.content,
          published: data.published,
          imageUrl: extractFirstImage(data.content),
          createdAt: data.published,
          readingTime: calculateReadingTime(data.content),
          isUpdated: new Date(data.updated) > new Date(data.published),
          category: data.labels?.[0] || 'تصميم',
          views: 0
        });

        // جلب جميع المنشورات
        const allPosts = await getBlogPosts();
        setPosts(allPosts);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ أثناء تحميل المقال');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [postId]);

  // وظيفة البحث
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  function formatDate(dateString: string | undefined): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('ar', options);
  }

  const processContent = (content: string) => {
    // تحويل الصور إلى تنسيق zmImg
    return content.replace(
      /<img([^>]*)src="([^"]*)"([^>]*)>/g,
      (match, before, src, after) => `
        <div class="zmImg">
          <img${before}src="${src}"${after} 
            loading="lazy" 
            onclick="return false" 
            class="lazy loaded"
          />
        </div>
      `
    );
  };

  useEffect(() => {
    // إضافة معالج النقر للصور
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && target.parentElement?.classList.contains('zmImg')) {
        const zmImg = target.parentElement;
        
        if (zmImg.classList.contains('s')) {
          zmImg.classList.remove('s');
          document.body.style.overflow = '';
          
          // إزالة زر الإغلاق إذا كان موجوداً
          const closeBtn = zmImg.querySelector('.close-btn');
          if (closeBtn) {
            closeBtn.remove();
          }
        } else {
          zmImg.classList.add('s');
          document.body.style.overflow = 'hidden';
          
          // إضافة زر الإغلاق
          const closeBtn = document.createElement('button');
          closeBtn.className = 'close-btn';
          closeBtn.onclick = () => {
            zmImg.classList.remove('s');
            document.body.style.overflow = '';
            closeBtn.remove();
          };
          zmImg.appendChild(closeBtn);
        }
      }
    };

    document.addEventListener('click', handleImageClick);
    return () => document.removeEventListener('click', handleImageClick);
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return (
    <div className="error-message">
      <p>{error}</p>
      <div className="action-buttons">
        <button 
          className="error-primary-btn" 
          onClick={() => window.location.reload()}
        >
          حاول مرة أخرى
        </button>
        <Link href="/" className="error-secondary-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
  if (!post) return (
    <div className="error-message">
      <p>لم يتم العثور على المقال</p>
      <div className="action-buttons">
        <Link href="/" className="error-secondary-btn">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );

  return (
    <div className="blog-container">
      <article className="main-content">
        {/* Breadcrumb */}
        <div className="brdCmb">
          <Link href="/">الصفحة الرئيسية</Link>
          <Link href="/blog">المدونة</Link>
          <span>{post.title}</span>
        </div>

        {/* المقال */}
        <div className="blog-post">
          <h1 className="post-title">{post.title}</h1>
          <div className="blog-meta">
            <div className="meta-right">
              <span>
                <FontAwesomeIcon icon={faClock} />
                {formatDate(post.createdAt)}
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} />
                {post.readingTime}
              </span>
            </div>
            <button 
              onClick={() => setIsShareOpen(true)} 
              className="share-icon"
              aria-label="مشاركة"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
          </div>
          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
          />
          
          {/* إضافة قسم المشاركة في نهاية المنشور */}
          <div className="pSh">
            <div className="pShc" data-text="مشاركة:">
              <a 
                aria-label="Facebook" 
                className="c fb" 
                data-text="فيسبوك" 
                href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                rel="noopener"
                role="button"
                target="_blank"
              >
                <svg viewBox="0 0 64 64">
                  <path d="M20.1,36h3.4c0.3,0,0.6,0.3,0.6,0.6V58c0,1.1,0.9,2,2,2h7.8c1.1,0,2-0.9,2-2V36.6c0-0.3,0.3-0.6,0.6-0.6h5.6c1,0,1.9-0.7,2-1.7l1.3-7.8c0.2-1.2-0.8-2.4-2-2.4h-6.6c-0.5,0-0.9-0.4-0.9-0.9v-5c0-1.3,0.7-2,2-2h5.9c1.1,0,2-0.9,2-2V6.2c0-1.1-0.9-2-2-2h-7.1c-13,0-12.7,10.5-12.7,12v7.3c0,0.3-0.3,0.6-0.6,0.6h-3.4c-1.1,0-2,0.9-2,2v7.8C18.1,35.1,19,36,20.1,36z"></path>
                </svg>
              </a>
              <a 
                aria-label="WhatsApp" 
                className="c wa" 
                data-text="واتساب" 
                href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                rel="noopener"
                role="button"
                target="_blank"
              >
                <svg viewBox="0 0 64 64">
                  <path d="M6.9,48.4c-0.4,1.5-0.8,3.3-1.3,5.2c-0.7,2.9,1.9,5.6,4.8,4.8l5.1-1.3c1.7-0.4,3.5-0.2,5.1,0.5c4.7,2.1,10,3,15.6,2.1c12.3-1.9,22-11.9,23.5-24.2C62,17.3,46.7,2,28.5,4.2C16.2,5.7,6.2,15.5,4.3,27.8c-0.8,5.6,0,10.9,2.1,15.6C7.1,44.9,7.3,46.7,6.9,48.4z M21.3,19.8c0.6-0.5,1.4-0.9,1.8-0.9s2.3-0.2,2.9,1.2c0.6,1.4,2,4.7,2.1,5.1c0.2,0.3,0.3,0.7,0.1,1.2c-0.2,0.5-0.3,0.7-0.7,1.1c-0.3,0.4-0.7,0.9-1,1.2c-0.3,0.3-0.7,0.7-0.3,1.4c0.4,0.7,1.8,2.9,3.8,4.7c2.6,2.3,4.9,3,5.5,3.4c0.7,0.3,1.1,0.3,1.5-0.2c0.4-0.5,1.7-2,2.2-2.7c0.5-0.7,0.9-0.6,1.6-0.3c0.6,0.2,4,1.9,4.7,2.2c0.7,0.3,1.1,0.5,1.3,0.8c0.2,0.3,0.2,1.7-0.4,3.2c-0.6,1.6-2.1,3.1-3.2,3.5c-1.3,0.5-2.8,0.7-9.3-1.9c-7-2.8-11.8-9.8-12.1-10.3c-0.3-0.5-2.8-3.7-2.8-7.1C18.9,22.1,20.7,20.4,21.3,19.8z"></path>
                </svg>
              </a>
              <a 
                aria-label="Twitter" 
                className="c tw" 
                data-text="تويتر" 
                href={`https://twitter.com/share?url=${window.location.href}`}
                rel="noopener"
                role="button"
                target="_blank"
              >
                <svg viewBox="0 0 64 64">
                  <path d="M11.4,26.6C11.5,26.6,11.5,26.6,11.4,26.6c-0.9,0-1.8-0.2-2.6-0.4c-1.3-0.4-2.5,0.8-2.1,2c1.1,4.3,4.5,7.7,8.8,8.6c-1,0.3-2,0.4-3,0.4c-1,0-1.7,1.1-1.2,2c1.9,3.5,5.6,5.9,9.7,6h1c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-1.3,0-2.9-0.1-4.5-0.5c-1-0.2-2-0.2-2.9,0.1c-1.7,0.6-3.5,1.1-5.4,1.3C8.5,50.2,8,50.7,8,51.4v0c0,0.5,0.3,1,0.8,1.2c3.9,1.7,8.3,2.7,12.9,2.7c21.1,0,32.7-17.9,32.7-33.5v0c0-0.9,0.4-1.8,1.1-2.4c1.2-1,2.3-2.1,3.3-3.4c0.4-0.5-0.1-1.2-0.7-1c-1.2,0.4-2.4,0.7-3.7,0.9c-0.2,0-0.3-0.2-0.1-0.4c1.5-1.1,2.8-2.6,3.6-4.3c0.3-0.6-0.3-1.2-0.9-0.9c-1.1,0.6-2.3,1-3.5,1.4c-1.2,0.4-2.6,0.1-3.6-0.7c-1.9-1.5-4.4-2.4-7-2.4c-5.3,0-9.8,3.7-11.1,8.8c-0.2,0.9,0.5,1.7,1.4,1.7c1.6-0.1,3.2-0.3,4.4-0.5c1-0.2,2,0.3,2.4,1.2c0.5,1.2-0.2,2.4-1.3,2.7c-4.6,1.3-9.7,0.4-9.7,0.4l0,0C21.2,21.8,14.3,18,9.3,12.5C8.6,11.7,7.3,12,7,12.9c-0.4,1.2-0.6,2.5-0.6,3.9C6.4,20.9,8.4,24.5,11.4,26.6z"></path>
                </svg>
              </a>
              <label 
                aria-label="مشاركة إلى تطبيقات أخرى" 
                onClick={() => setIsShareOpen(true)}
              >
                <svg viewBox="0 0 512 512">
                  <path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32C448,238.3,434.3,224,417.4,224z"></path>
                </svg>
              </label>
            </div>
          </div>

          {/* المنشورات المقترحة */}
          <div id="rPst">
            <div className="rPst">
              <h2 className="title dt">منشورات قد تعجبك</h2>
              <ul className="s-3 scrlH">
                {posts.slice(0, 3).map((post, index) => (
                  <li key={post.id}>
                    <div className="i">
                      <div className="pThmb">
                        <CustomLink 
                          href={`/blog/${post.id}`}
                          className="thmb"
                          aria-label={post.title}
                        >
                          <div style={{ 
                            backgroundImage: `url(${post.imageUrl})` 
                          }}></div>
                        </CustomLink>
                      </div>
                      <div className="iTtl aTtl">
                        <CustomLink 
                          href={`/blog/${post.id}`}
                          data-date={formatDate(post.createdAt)}
                          data-text="قراءة المزيد"
                        >
                          {post.title}
                        </CustomLink>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* القائمة الجانبية */}
      <aside className="sidebar">
        {/* قسم البحث */}
        <div className="search-section">
          <h2 className="sidebar-title">البحث</h2>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="ابحث في المدونة..." 
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
              </svg>
            </button>
          </div>
          {/* عرض نتائج البحث */}
          {searchQuery.trim() !== '' && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <div className="popular-posts">
                  {searchResults.map(post => (
                    <CustomLink href={`/blog/${post.id}`} key={post.id} className="popular-post-item">
                      <div className="popular-post-content">
                        <h3 className="popular-post-title">{post.title}</h3>
                        <div className="popular-post-meta">
                          <span className="post-date">{formatDate(post.createdAt)}</span>
                        </div>
                      </div>
                    </CustomLink>
                  ))}
                </div>
              ) : (
                <div className="no-results">لا توجد نتائج للبحث</div>
              )}
            </div>
          )}
        </div>

        {/* المنشورات الشائعة */}
        {searchQuery.trim() === '' && (
          <>
            <h2 className="sidebar-title">المنشورات الشائعة</h2>
            <div className="popular-posts">
              {/* المنشور الأول مع صورة */}
              {posts[0] && (
                <CustomLink href={`/blog/${posts[0].id}`} className="popular-post-item with-image">
                  <div className="popular-post-image">
                    <ImageWithFallback 
                      imageUrl={posts[0].imageUrl} 
                      className="popular-post-thumbnail"
                    />
                  </div>
                  <div className="popular-post-content">
                    <div className="popular-post-header">
                      <span className="popular-post-number">#1</span>
                      <h3 className="popular-post-title">{posts[0].title}</h3>
                    </div>
                    <div className="popular-post-meta">
                      <span className="post-date">{formatDate(posts[0].createdAt)}</span>
                    </div>
                  </div>
                </CustomLink>
              )}

              {/* باقي المنشورات */}
              {posts.slice(1, 5).map((post, index) => (
                <CustomLink href={`/blog/${post.id}`} key={post.id} className="popular-post-item">
                  <div className="popular-post-number">#{index + 2}</div>
                  <div className="popular-post-content">
                    <h3 className="popular-post-title">{post.title}</h3>
                    <div className="popular-post-meta">
                      <span className="post-date">{formatDate(post.createdAt)}</span>
                    </div>
                  </div>
                </CustomLink>
              ))}
            </div>
          </>
        )}
      </aside>

      {/* نافذة المشاركة المنبثقة */}
      {isShareOpen && (
        <div className="share-dropdown">
          <div className="shBrs fixLs">
            <div className="shH fixH fixT" data-text="مشاركة المشور">
              <label aria-label="إغلاق" className="c cl" onClick={() => setIsShareOpen(false)}></label>
            </div>
            <div className="shC">
              <div className="shL">
                <div data-text="Facebook">
                  <a aria-label="Facebook" href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} rel="noopener" target="_blank">
                    <svg viewBox="0 0 64 64"><path d="M20.1,36h3.4c0.3,0,0.6,0.3,0.6,0.6V58c0,1.1,0.9,2,2,2h7.8c1.1,0,2-0.9,2-2V36.6c0-0.3,0.3-0.6,0.6-0.6h5.6c1,0,1.9-0.7,2-1.7l1.3-7.8c0.2-1.2-0.8-2.4-2-2.4h-6.6c-0.5,0-0.9-0.4-0.9-0.9v-5c0-1.3,0.7-2,2-2h5.9c1.1,0,2-0.9,2-2V6.2c0-1.1-0.9-2-2-2h-7.1c-13,0-12.7,10.5-12.7,12v7.3c0,0.3-0.3,0.6-0.6,0.6h-3.4c-1.1,0-2,0.9-2,2v7.8C18.1,35.1,19,36,20.1,36z"></path></svg>
                  </a>
                </div>
                <div data-text="WhatsApp">
                  <a aria-label="WhatsApp" href={`https://api.whatsapp.com/send?text=${window.location.href}`} rel="noopener" target="_blank">
                    <svg viewBox="0 0 64 64"><path d="M6.9,48.4c-0.4,1.5-0.8,3.3-1.3,5.2c-0.7,2.9,1.9,5.6,4.8,4.8l5.1-1.3c1.7-0.4,3.5-0.2,5.1,0.5c4.7,2.1,10,3,15.6,2.1c12.3-1.9,22-11.9,23.5-24.2C62,17.3,46.7,2,28.5,4.2C16.2,5.7,6.2,15.5,4.3,27.8c-0.8,5.6,0,10.9,2.1,15.6C7.1,44.9,7.3,46.7,6.9,48.4z M21.3,19.8c0.6-0.5,1.4-0.9,1.8-0.9s2.3-0.2,2.9,1.2c0.6,1.4,2,4.7,2.1,5.1c0.2,0.3,0.3,0.7,0.1,1.2c-0.2,0.5-0.3,0.7-0.7,1.1c-0.3,0.4-0.7,0.9-1,1.2c-0.3,0.3-0.7,0.7-0.3,1.4c0.4,0.7,1.8,2.9,3.8,4.7c2.6,2.3,4.9,3,5.5,3.4c0.7,0.3,1.1,0.3,1.5-0.2c0.4-0.5,1.7-2,2.2-2.7c0.5-0.7,0.9-0.6,1.6-0.3c0.6,0.2,4,1.9,4.7,2.2c0.7,0.3,1.1,0.5,1.3,0.8c0.2,0.3,0.2,1.7-0.4,3.2c-0.6,1.6-2.1,3.1-3.2,3.5c-1.3,0.5-2.8,0.7-9.3-1.9c-7-2.8-11.8-9.8-12.1-10.3c-0.3-0.5-2.8-3.7-2.8-7.1C18.9,22.1,20.7,20.4,21.3,19.8z"></path></svg>
                  </a>
                </div>
                <div data-text="Twitter">
                  <a aria-label="Twitter" href={`https://twitter.com/share?url=${window.location.href}`} rel="noopener" target="_blank">
                    <svg viewBox="0 0 64 64"><path d="M11.4,26.6C11.5,26.6,11.5,26.6,11.4,26.6c-0.9,0-1.8-0.2-2.6-0.4c-1.3-0.4-2.5,0.8-2.1,2c1.1,4.3,4.5,7.7,8.8,8.6c-1,0.3-2,0.4-3,0.4c-1,0-1.7,1.1-1.2,2c1.9,3.5,5.6,5.9,9.7,6h1c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-1.3,0-2.9-0.1-4.5-0.5c-1-0.2-2-0.2-2.9,0.1c-1.7,0.6-3.5,1.1-5.4,1.3C8.5,50.2,8,50.7,8,51.4v0c0,0.5,0.3,1,0.8,1.2c3.9,1.7,8.3,2.7,12.9,2.7c21.1,0,32.7-17.9,32.7-33.5v0c0-0.9,0.4-1.8,1.1-2.4c1.2-1,2.3-2.1,3.3-3.4c0.4-0.5-0.1-1.2-0.7-1c-1.2,0.4-2.4,0.7-3.7,0.9c-0.2,0-0.3-0.2-0.1-0.4c1.5-1.1,2.8-2.6,3.6-4.3c0.3-0.6-0.3-1.2-0.9-0.9c-1.1,0.6-2.3,1-3.5,1.4c-1.2,0.4-2.6,0.1-3.6-0.7c-1.9-1.5-4.4-2.4-7-2.4c-5.3,0-9.8,3.7-11.1,8.8c-0.2,0.9,0.5,1.7,1.4,1.7c1.6-0.1,3.2-0.3,4.4-0.5c1-0.2,2,0.3,2.4,1.2c0.5,1.2-0.2,2.4-1.3,2.7c-4.6,1.3-9.7,0.4-9.7,0.4l0,0C21.2,21.8,14.3,18,9.3,12.5C8.6,11.7,7.3,12,7,12.9c-0.4,1.2-0.6,2.5-0.6,3.9C6.4,20.9,8.4,24.5,11.4,26.6z"></path></svg>
                  </a>
                </div>
                <div data-text="Telegram">
                  <a aria-label="Telegram" href={`https://t.me/share/url?url=${window.location.href}`} rel="noopener" target="_blank">
                    <svg viewBox="0 0 64 64"><path d="M56.4,8.2l-51.2,20c-1.7,0.6-1.6,3,0.1,3.5l9.7,2.9c2.1,0.6,3.8,2.2,4.4,4.3l3.8,12.1c0.5,1.6,2.5,2.1,3.7,0.9l5.2-5.3c0.9-0.9,2.2-1,3.2-0.3l11.5,8.4c1.6,1.2,3.9,0.3,4.3-1.7l8.7-41.8C60.4,9.1,58.4,7.4,56.4,8.2z M50,17.4L29.4,35.6c-1.1,1-1.9,2.4-2,3.9c-0.2,1.5-2.3,1.7-2.8,0.3l-0.9-3c-0.7-2.2,0.2-4.5,2.1-5.7l23.5-14.6C49.9,16.1,50.5,16.9,50,17.4z"></path></svg>
                  </a>
                </div>
                <div data-text="LinkedIn">
                  <a aria-label="LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} rel="noopener" target="_blank">
                    <svg viewBox="0 0 64 64"><path d="M8,54.7C8,55.4,8.6,56,9.3,56h9.3c0.7,0,1.3-0.6,1.3-1.3V23.9c0-0.7-0.6-1.3-1.3-1.3H9.3c-0.7,0-1.3,0.6-1.3,1.3V54.7z"></path><path d="M46.6,22.3c-4.5,0-7.7,1.8-9.4,3.7c-0.4,0.4-1.1,0.1-1.1-0.5l0-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4c-0.7,0-1.3,0.6-1.3,1.3c0.1,5.7,0,25.4,0,30.7c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V37.9c0-1,0-2,0.3-2.7c0.8-2,2.6-4.1,5.7-4.1c4.1,0,6,3.1,6,7.6v15.9c0,0.7,0.6,1.3,1.3,1.3h9.3c0.7,0,1.3-0.6,1.3-1.3V37.4C60,27.1,54.1,22.3,46.6,22.3z"></path><path d="M13.9,18.9L13.9,18.9c3.8,0,6.1-2.4,6.1-5.4C19.9,10.3,17.7,8,14,8c-3.7,0-6,2.3-6,5.4C8,16.5,10.3,18.9,13.9,18.9z"></path></svg>
                  </a>
                </div>
                <div data-text="Email">
                  <a aria-label="Email" href={`mailto:?body=${window.location.href}`} target="_blank">
                    <svg viewBox="0 0 500 500"><path d="M468.051,222.657c0-12.724-5.27-24.257-13.717-32.527L282.253,45.304c-17.811-17.807-46.702-17.807-64.505,0L45.666,190.129c-8.448,8.271-13.717,19.803-13.717,32.527v209.054c0,20.079,16.264,36.341,36.34,36.341h363.421c20.078,0,36.34-16.262,36.34-36.341V222.657z M124.621,186.402h250.758c11.081,0,19.987,8.905,19.987,19.991v34.523c-0.088,4.359-1.818,8.631-5.181,11.997l-55.966,56.419l83.224,83.127c6.904,6.904,6.904,18.081,0,24.985s-18.085,6.904-24.985,0l-85.676-85.672H193.034l-85.492,85.672c-6.907,6.904-18.081,6.904-24.985,0c-6.906-6.904-6.906-18.081,0-24.985l83.131-83.127l-55.875-56.419c-3.638-3.638-5.363-8.358-5.181-13.177v-33.343C104.632,195.307,113.537,186.402,124.621,186.402z"></path></svg>
                  </a>
                </div>
              </div>
              <div className="cpL" data-text="أو نسخ الرابط">
                <div className="cpLb">
                  <svg className="line" viewBox="0 0 24 24">
                    <path d="M13.0601 10.9399C15.3101 13.1899 15.3101 16.8299 13.0601 19.0699C10.8101 21.3099 7.17009 21.3199 4.93009 19.0699C2.69009 16.8199 2.68009 13.1799 4.93009 10.9399"></path>
                    <path className="svgC" d="M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099"></path>
                  </svg>
                  <input
                    id="getlink"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                    readOnly
                    value={window.location.href}
                  />
                  <label
                    htmlFor="getlink"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                  >
                    نسخ
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox active"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="close-lightbox"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <Image
            src={selectedImage}
            alt="صورة مكبرة"
            width={1200}
            height={800}
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function extractFirstImage(content: string): string {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : '/default-blog-image.jpg';
}

// دالة لحساب وقت القراءة
const calculateReadingTime = (content: string): string => {
  // إزالة HTML tags
  const plainText = content.replace(/<[^>]+>/g, '');
  // حساب عدد الكلمات (متوسط 250 كلمة في الدقيقة)
  const wordCount = plainText.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 250);
  
  if (minutes < 1) return 'أقل من دقيقة';
  if (minutes === 1) return 'دقيقة واحدة';
  if (minutes === 2) return 'دقيقتان';
  if (minutes <= 10) return `${minutes} دقائق`;
  return `${minutes} دقيقة`;
}; 