'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: 'لماذا الدفع قبل العمل؟',
    answer: 'الدفع قبل البدء في العمل يدل على جدية العميل وضمان تغطية تكاليف الخدمة'
  },
  {
    question: 'من يتحمل ضريبة التحويل؟',
    answer: 'ضريبة التحويل لتغطية تكاليف المعاملات المالية الدولية وتقديم خدمة آمنة لك'
  },
  {
    question: 'هل يمكنني استلام ملفات (AI - PSD)؟',
    answer: 'نعم يمكنك استلام الملفات المفتوحة وذلك عن طريق دفع قيمتها التي تعتمد على وع التصميم'
  },
  {
    question: 'لماذا يتم نشر تصميمي في الموقع بدون إذني؟',
    answer: 'التصاميم المنشورة في الموقع لغرض العرض والنشر وهي ضمن حقوقي كمصمم'
  },
  {
    question: 'ما الذي يضمن لي جودة الخدمة؟',
    answer: 'أحرص بشكل كبير على تقديم أفضل جودة في التصميم وإرضاء عملائي'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container4">
        <div className="section-header">
          <h2>الأسئلة الشائعة</h2>
          <p>إجابات على أكثر الأسئلة شيوعاً</p>
        </div>
        
        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <FontAwesomeIcon 
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div 
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? '1000px' : '0'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 