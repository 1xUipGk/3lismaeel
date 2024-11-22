'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCreditCard,
  faMoneyBillTransfer,
  faFileInvoiceDollar,
  faHourglassHalf,
  faExclamationTriangle,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import IconProvider from '@/components/IconProvider';

export default function FinancialPolicies() {
  return (
    <IconProvider>
      <div className="policies-container">
        <div className="policies-content">
          <h1>السياسات المالية</h1>
          
          <div className="policies-list">
            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faCreditCard} 
                  className="policy-icon"
                />
                <p><strong>الدفع إلزامي</strong> قبل البداية في أي خدمة</p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faMoneyBillTransfer} 
                  className="policy-icon"
                />
                <p>يتحمل الزبون <strong>جميع الضرائب ورسوم التحويل</strong></p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faFileInvoiceDollar} 
                  className="policy-icon"
                />
                <p><strong>يمنع تسليم الخدمات</strong> قبل دفع سعرها الكامل</p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faHourglassHalf} 
                  className="policy-icon"
                />
                <p>في حال طلب خدمة مستعجلة، سيتم طلب <strong>مبلغ إضافي</strong> على السعر الأصلي</p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faExclamationTriangle} 
                  className="policy-icon"
                />
                <p>بعد البدء في أي خدمة، عند <strong>مخالفة القانون</strong> يتم نشر طلبك مجاناً</p>
              </h3>
            </div>

            <div className="policy-item">
              <h3>
                <FontAwesomeIcon 
                  icon={faMoneyBillWave} 
                  className="policy-icon"
                />
                <p><strong>يمنع طلب استرجاع</strong> للمبلغ</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </IconProvider>
  );
} 