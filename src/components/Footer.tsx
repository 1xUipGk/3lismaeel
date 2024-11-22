'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faWhatsapp, 
  faFacebookF, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h4>نبذة عني</h4>
            <p>مصمم جرافيك محترف متخصص في تصميم المطبوعات وتصاميم السوشيال ميديا</p>
            
            <div className="social-links">
              <a 
                href="https://www.instagram.com/3lismaeel" 
                target="_blank" 
                className="social-link instagram-link"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              
              <a 
                href="https://wa.me/97337742876" 
                target="_blank"
                className="social-link whatsapp-link"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              
              <a 
                href="https://x.com/3lismaeel" 
                target="_blank"
                className="social-link x-link"
                rel="noopener noreferrer"
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              
              <a 
                href="https://www.facebook.com/3lismaeel" 
                target="_blank"
                className="social-link facebook-link"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              
              <a 
                href="https://www.youtube.com/@3lismaeel" 
                target="_blank"
                className="social-link youtube-link"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <Link href="/contact">تواصل معي</Link>
            <span className="separator">|</span>
            <Link href="/financial-policies">السياسات المالية</Link>
            <span className="separator">|</span>
            <Link href="/work-policies">سياسات العمل</Link>
          </div>
          
          <div className="credit">
            <Link href="/" className="site-link">© 3lismaeel.xyz</Link>
            <svg className="verify-icon" viewBox="0 0 24 24">
              <path d="m21.56 10.739-1.36-1.58c-.26-.3-.47-.86-.47-1.26v-1.7c-0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0l-1.57 1.37c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52Zm-5.4-.63-4.83 4.83a.75.75 0 0 1-1.06 0l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z" />
            </svg>
            <span className="rights-text">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 