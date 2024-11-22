'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
  faInstagram, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import IconProvider from '@/components/IconProvider';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <IconProvider>
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-info">
            <h1>تواصل معي</h1>
            <p>
              سعيد بتواصلك! يمكنك اختيار الطريقة المناسبة لك للتواصل، وسأكون سعيداً بالرد على استفساراتك وتقديم المساعدة.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div className="contact-details">
                  <h3>واتساب</h3>
                  <p dir="ltr">+973 3774 2876</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="contact-details">
                  <h3>انستغرام</h3>
                  <p>@3lismaeel</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="contact-details">
                  <h3>منصة X</h3>
                  <p>@3lismaeel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>الاسم</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>الموضوع</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="موضوع الرسالة"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>الرسالة</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-btn">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
    </IconProvider>
  );
} 


