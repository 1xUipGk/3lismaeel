'use client';

import { useEffect } from 'react';
import { Tajawal } from "next/font/google";
import '../styles/social.css';
import Image from 'next/image';

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export default function SocialPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={`social-page ${tajawal.variable}`}>
      <div className="profile-section">
        <Image 
          src="/social/icon.png"
          alt="3lismaeel"
          width={120}
          height={120}
          className="profile-image"
          priority
        />
        <h1 className="profile-name">3lismaeel</h1>
        <p className="profile-bio">مصمم جرافيك محترف متخصص في تصميم المطبوعات وتصاميم السوشيال ميديا</p>
      </div>

      <div className="links-container">
        <a href="https://3lismaeel.xyz" className="social-link">
          <i className="fas fa-globe"></i>
          <span className="link-text">موقعي الرسمي</span>
          <i className="fas fa-chevron-left arrow"></i>
        </a>

        <a href="https://instagram.com/3lismaeel" target="_blank" className="social-link">
          <i className="fab fa-instagram"></i>
          <span className="link-text">تابعني على انستقرام</span>
          <i className="fas fa-chevron-left arrow"></i>
        </a>

        <a href="https://tiktok.com/@3lismaeel" target="_blank" className="social-link">
          <i className="fab fa-tiktok"></i>
          <span className="link-text">تابعني على تيك توك</span>
          <i className="fas fa-chevron-left arrow"></i>
        </a>

        <a href="https://facebook.com/3lismaeel" target="_blank" className="social-link">
          <i className="fab fa-facebook"></i>
          <span className="link-text">تابعني على فيسبوك</span>
          <i className="fas fa-chevron-left arrow"></i>
        </a>

        <a href="https://wa.me/97337742876" target="_blank" className="social-link">
          <i className="fab fa-whatsapp"></i>
          <span className="link-text">تواصل معي على واتساب</span>
          <i className="fas fa-chevron-left arrow"></i>
        </a>

        <a href="https://x.com/3lismaeel" target="_blank" className="social-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
          <span className="link-text">تابعني على X</span>
          <i className="fas fa-chevron-left arrow"></i>
        </a>
      </div>
    </div>
  );
} 