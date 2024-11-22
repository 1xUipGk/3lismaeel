'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewFormProps {
  onSubmit: (data: ReviewData) => Promise<void>;
  loading: boolean;
}

interface ReviewData {
  name: string;
  title: string;
  rating: number;
  text: string;
  image: File | null;
}

export default function ReviewForm({ onSubmit, loading }: ReviewFormProps) {
  const [formData, setFormData] = useState<ReviewData>({
    name: '',
    title: '',
    rating: 5,
    text: '',
    image: null
  });
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const maxLengths = {
    name: 50,
    title: 100,
    text: 500
  };

  const ratingTexts = [
    'بحاجة إلى تحسين',
    'مقبول',
    'جيد',
    'جيد جداً',
    'ممتاز'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      return;
    }

    await onSubmit(formData);
  };

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(null);
  };

  const handleStarClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  return (
    <div className="review-card">
      <h1 className="review-title">شاركني رأيك في خدماتي</h1>

      <form onSubmit={handleSubmit} className={`review-form ${isSubmitted ? 'was-validated' : ''}`}>
        <div className="form-group">
          <label>الاسم</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={maxLengths.name}
              placeholder="أدخل اسمك"
            />
            <span className="char-count">
              {formData.name.length}/{maxLengths.name}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>المسمى الوظيفي</label>
          <div className="input-wrapper">
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              maxLength={maxLengths.title}
              placeholder="مثال: صاحب مشروع"
            />
            <span className="char-count">
              {formData.title.length}/{maxLengths.title}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>صورتك الشخصية (اختياري)</label>
          <input
            type="file"
            onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
            accept="image/*"
            className="file-input"
          />
        </div>

        <div className="rating-group">
          <div className="rating-stars"
               onMouseLeave={handleStarLeave}>
            {[5, 4, 3, 2, 1].map((star) => (
              <FaStar
                key={star}
                className={`star ${star <= (hoverRating ?? formData.rating) ? 'active' : ''}`}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
              />
            ))}
          </div>
          <span className="rating-text">
            {ratingTexts[(hoverRating ?? formData.rating) - 1]}
          </span>
        </div>

        <div className="form-group">
          <label>رأيك في الخدمة</label>
          <div className="input-wrapper">
            <textarea
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              required
              rows={4}
              maxLength={maxLengths.text}
              placeholder="اكتب رأيك وانطباعك عن الخدمة المقدمة..."
            />
            <span className="char-count">
              {formData.text.length}/{maxLengths.text}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading ? 'جاري الإرسال...' : 'إرسال تقييمك'}
        </button>
      </form>
    </div>
  );
} 