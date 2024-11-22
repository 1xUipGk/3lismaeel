'use client';

import { useEffect, useState } from 'react';
import { getBlogPosts } from '@/lib/blogger';
import IconProvider from '@/components/IconProvider';
import LoadingSpinner from '@/components/LoadingSpinner';
import CustomLink from '@/components/CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { BlogPost } from '@/types/blog';

// إضافة أيقونة الصورة المفقودة
const NoImageIcon = () => (
  <div className="no-image-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76ZM6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z"/>
    </svg>
  </div>
);

// تحديث طريقة عرض الصور
function ImageWithFallback({ imageUrl, className }: { imageUrl: string, className: string }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onerror = () => setHasError(true);
  }, [imageUrl]);

  if (hasError) {
    return <NoImageIcon />;
  }

  return (
    <div 
      className={className}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    async function fetchPosts() {
      const blogPosts = await getBlogPosts();
      setPosts(blogPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  // وظيفة البحث
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  if (loading) return <LoadingSpinner />;

  const mainPost = posts[0];
  const popularPosts = [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 3);
  const otherPosts = posts.slice(1);

  // حساب المنشورات للصفحة الحالية
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('ar', options);
  }

  // وظيفة تغيير الصفحة
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconProvider>
      <div className="blog-container">
        {/* المحتوى الرئيسي */}
        <div className="main-content">
          {/* المقال المثبت */}
          <div className="todays-article">
            {mainPost && (
              <CustomLink href={`/blog/${mainPost.id}`} className="main-article">
                <div className="article-image-wrapper">
                  <ImageWithFallback 
                    imageUrl={mainPost.imageUrl} 
                    className="article-image"
                  />
                  <div className="views-badge">
                    <FontAwesomeIcon icon={faEye} /> {mainPost.views || 0}
                  </div>
                </div>
                <div className="article-details">
                  <h2 className="article-title">{mainPost.title}</h2>
                  <p className="article-excerpt">{mainPost.excerpt}</p>
                  <div className="article-meta">
                    <div className="post-status">
                      {mainPost.isUpdated ? (
                        <span className="status-badge updated">تم التحديث</span>
                      ) : (
                        <span className="status-badge published">تم النشر</span>
                      )}
                      <span className="post-date">{formatDate(mainPost.createdAt)}</span>
                    </div>
                    <span className="read-more">قراءة المزيد</span>
                  </div>
                </div>
              </CustomLink>
            )}
          </div>

          {/* أحدث المنشورات */}
          <div className="most-viewed">
            <h2 className="section-label">أحدث المنشورات</h2>
            <div className="most-viewed-grid">
              {currentPosts.map(post => (
                <CustomLink href={`/blog/${post.id}`} key={post.id} className="most-viewed-card">
                  <div className="article-image-wrapper">
                    <ImageWithFallback 
                      imageUrl={post.imageUrl} 
                      className="article-thumbnail"
                    />
                    <div className="views-badge">
                      <FontAwesomeIcon icon={faEye} /> {post.views || 0}
                    </div>
                  </div>
                  <div className="article-info">
                    <h3 className="article-title">{post.title}</h3>
                    <p className="article-excerpt">{post.excerpt}</p>
                    <div className="article-meta">
                      <div className="post-status">
                        {post.isUpdated ? (
                          <span className="status-badge updated">تم التحديث</span>
                        ) : (
                          <span className="status-badge published">تم النشر</span>
                        )}
                        <span className="post-date">{formatDate(post.createdAt)}</span>
                      </div>
                      <span className="read-more">قراءة المزيد</span>
                    </div>
                  </div>
                </CustomLink>
              ))}
            </div>

            {/* أزرار التنقل بين الصفحات */}
            {totalPages > 1 && (
              <div className="pagination">
                <span className="pagination-label">الصفحات:</span>
                <div className="pagination-buttons">
                  {/* زر السابق */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="pagination-button prev"
                    disabled={currentPage === 1}
                  >
                    السابق
                  </button>

                  {/* أرقام الصفحات */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                    >
                      {number}
                    </button>
                  ))}

                  {/* زر التالي */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="pagination-button next"
                    disabled={currentPage === totalPages}
                  >
                    التالي
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

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
                    {searchResults.map((post, index) => (
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

                {/* باقي المنشورات بدون صور */}
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
      </div>
    </IconProvider>
  );
} 