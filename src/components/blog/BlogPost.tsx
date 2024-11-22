'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('ar');
  };

  return (
    <article className="blog-post">
      <header>
        <h1>{post.title}</h1>
        <time dateTime={post.published || ''}>
          {formatDate(post.published)}
        </time>
      </header>
      <div 
        className="blog-content" 
        dangerouslySetInnerHTML={{ __html: post.content }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'IMG') {
            e.preventDefault();
            setSelectedImage(target.getAttribute('src'));
          }
        }}
      />

      {selectedImage && (
        <div 
          className="lightbox"
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
            unoptimized
          />
        </div>
      )}
    </article>
  );
} 