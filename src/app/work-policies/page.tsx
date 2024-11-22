'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPenRuler,
  faPaintBrush,
  faLaptop,
  faImage
} from '@fortawesome/free-solid-svg-icons';
import IconProvider from '@/components/IconProvider';

export default function WorkPolicies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconProvider>
      <div className="policies-container">
        <div className="policies-content">
          <h1>سياسات العمل</h1>
          
          <div className="policies-list">
            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faPenRuler} 
                  className="policy-icon"
                />
                <p>يسمح بطلب <strong>3 تعديلات مجانية</strong> على الطلب الواحد، أي تعديلات إضافية تكون مدفوعة</p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faPaintBrush} 
                  className="policy-icon"
                />
                <p>التعديلات تكون على <strong>أشياء بسيطة</strong> داخل التصميم، لا أغير الخلفيات</p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faLaptop} 
                  className="policy-icon"
                />
                <p>جميع الخدمات التي أقدمها <strong>رقمية</strong></p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faImage} 
                  className="policy-icon"
                />
                <p>لدي الحق في <strong>نشر خدمتك</strong> من باب العرض</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </IconProvider>
  );
} 