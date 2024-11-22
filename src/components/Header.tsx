'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// Import Logo dynamically with no SSR
const Logo = dynamic(() => import('./Logo'), {
  ssr: false,
  loading: () => <div className="w-12 h-12" /> // placeholder while loading
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" aria-label="الصفحة الرئيسية" className="block">
          <Logo />
        </Link>

        <button 
          className="menu-button md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </button>

        <div className={`nav-links ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link href="/" className="nav-link">الرئيسية</Link>
          <Link href="/#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>خدماتي</Link>
          <Link href="/portfolio" className="nav-link">أعمالي</Link>
          <Link href="/blog" className="nav-link">المدونة</Link>
          <Link href="/contact" className="nav-link">تواصل معي</Link>
        </div>
      </div>
    </nav>
  );
} 