'use client';

import { useEffect, useState } from 'react';
import { getApp, initializeApp } from '@firebase/app';
import { getDatabase, ref, onValue } from '@firebase/database';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '@/components/LoadingSpinner';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
let app;
try {
  app = getApp();
} catch {
  app = initializeApp(firebaseConfig);
}

const database = getDatabase(app);

interface Work {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

const categories = [
  { id: 'social-media', title: 'بوستات سوشيال ميديا' },
  { id: 'print', title: 'الفلايرات والبروشورات' },
  { id: 'roll-up', title: 'رول أب ولافتات' },
  { id: 'menu', title: 'قوائم الطعام' },
  { id: 'business-cards', title: 'البطاقات الشخصية' },
  { id: 'book-covers', title: 'أغلفة الكتب' },
  { id: 'invitations', title: 'بطاقات دعوة' },
  { id: 'certificates', title: 'الشهادات التقديرية' },
  { id: 'advertising', title: 'الوحات الإعلانية' }
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [works, setWorks] = useState<{ [key: string]: Work[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const worksRef = ref(database, 'works');
    
    const unsubscribe = onValue(worksRef, (snapshot) => {
      try {
        const data = snapshot.val();
        if (data) {
          const categorizedWorks: { [key: string]: Work[] } = {};
          
          Object.values(data).forEach((work: any) => {
            if (!categorizedWorks[work.category]) {
              categorizedWorks[work.category] = [];
            }
            categorizedWorks[work.category].push(work);
          });
          
          setWorks(categorizedWorks);
        }
        setLoading(false);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل الأعمال');
        setLoading(false);
      }
    }, (error) => {
      setError('حدث خطأ أثناء تحميل الأعمال');
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder.jpg'; // يمكنك إضافة صورة placeholder
  };

  if (!mounted) return null;

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="error-container">
        <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" />
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">معرض الأعمال</h1>
      
      {/* Categories Navigation */}
      <div className="categories-nav">
        <div className="categories-list">
          {categories.map(category => {
            const categoryWorks = works[category.id];
            if (!categoryWorks || categoryWorks.length === 0) return null;

            return (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="category-link"
              >
                {category.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* Rest of the portfolio content */}
      {categories.map(category => {
        const categoryWorks = works[category.id];
        if (!categoryWorks || categoryWorks.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="portfolio-section">
            <h2 className="category-title">{category.title}</h2>
            
            <div className="portfolio-grid">
              {categoryWorks.map((work, index) => (
                <div 
                  key={work.id || index} 
                  className="work-item"
                  onClick={() => setSelectedImage(work.imageUrl)}
                >
                  <div className="image-wrapper">
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      width={300}
                      height={300}
                      className="work-image"
                      onError={handleImageError}
                      loading="lazy"
                      quality={75}
                    />
                  </div>
                  <div className="work-overlay">
                    <h3>{work.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

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
            onError={handleImageError}
            loading="lazy"
            quality={100}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
} 