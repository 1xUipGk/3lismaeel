'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({ href, children, className }: CustomLinkProps) {
  const pathname = usePathname();

  const handleMenuClose = () => {
    document.body.classList.remove('mobile-menu-open');
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.remove('mobile-menu-open');
    
    // تغيير الأيقونة إلى أيقونة القائمة
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
      menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
        </svg>
      `;
    }
  };

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    handleMenuClose();
  }, [pathname]);

  return (
    <Link href={href} className={className} onClick={handleMenuClose}>
      {children}
    </Link>
  );
} 