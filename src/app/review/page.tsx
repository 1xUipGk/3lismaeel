'use client';

import { useState, useEffect } from 'react';
import { initializeApp, getApps } from '@firebase/app';
import { getDatabase, ref, push, set } from '@firebase/database';
import { firebaseConfig } from '@/lib/firebase-config';
import { uploadToImgur } from '@/lib/imgur';
import ReviewForm from '@/components/review/ReviewForm';
import ThankYouMessage from '@/components/review/ThankYouMessage';
import AlreadyReviewed from '@/components/review/AlreadyReviewed';
import { FaSpinner } from 'react-icons/fa';
import './review.css';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export default function Review() {
  const [loading, setLoading] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [reviewerData, setReviewerData] = useState<{ name: string; date: string } | null>(null);
  const [showMessage, setShowMessage] = useState({ show: false, type: '', text: '' });
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    checkPreviousReview();
    setPageLoading(false);
  }, []);

  const checkPreviousReview = () => {
    const hasReviewedStorage = localStorage.getItem('hasReviewed');
    if (hasReviewedStorage) {
      setHasReviewed(true);
      setReviewerData({
        name: localStorage.getItem('reviewerName') || '',
        date: localStorage.getItem('reviewDate') || ''
      });
    }
  };

  const showNotification = (type: string, text: string) => {
    setShowMessage({ show: true, type, text });
    setTimeout(() => setShowMessage({ show: false, type: '', text: '' }), 3000);
  };

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const testimonialData = {
        ...data,
        createdAt: new Date().toISOString()
      };

      if (data.image) {
        try {
          showNotification('info', 'جاري رفع الصورة...');
          const imageUrl = await uploadToImgur(data.image);
          testimonialData.imageUrl = imageUrl;
        } catch (error) {
          console.error('Error uploading image:', error);
          showNotification('error', 'فشل في رفع الصورة');
          delete testimonialData.imageUrl;
        }
      }

      showNotification('info', 'جاري حفظ التقييم...');
      const testimonialsRef = ref(db, 'testimonials');
      const newTestimonialRef = push(testimonialsRef);
      await set(newTestimonialRef, testimonialData);

      localStorage.setItem('hasReviewed', 'true');
      localStorage.setItem('reviewerName', data.name);
      localStorage.setItem('reviewDate', testimonialData.createdAt);

      setHasReviewed(true);
      setReviewerData({
        name: data.name,
        date: testimonialData.createdAt
      });

      showNotification('success', 'تم إرسال تقييمك بنجاح!');
    } catch (error) {
      console.error('Error:', error);
      showNotification('error', 'حدث خطأ أثناء إرسال التقييم');
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner" />
      </div>
    );
  }

  if (hasReviewed && reviewerData) {
    return <AlreadyReviewed name={reviewerData.name} date={reviewerData.date} />;
  }

  return (
    <div className="review-container">
      {showMessage.show && (
        <div className={`notification ${showMessage.type}`}>
          {showMessage.text}
        </div>
      )}
      
      {reviewerData ? (
        <ThankYouMessage name={reviewerData.name} date={reviewerData.date} />
      ) : (
        <ReviewForm onSubmit={handleSubmit} loading={loading} />
      )}
    </div>
  );
} 