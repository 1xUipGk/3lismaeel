'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHashtag, faFileAlt, faScroll,
  faUtensils, faIdCard, faBook,
  faEnvelopeOpen, faAward, faAd,
  faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import IconProvider from '@/components/IconProvider';

const services = [
  {
    icon: faHashtag,
    title: 'سوشال ميديا',
    description: 'تصميم منشورات جذابة لمنصات التواصل الاجتماعي تعزز حضورك الرقمي',
    link: '/portfolio#social-media'
  },
  {
    icon: faFileAlt,
    title: 'الفلايرات والبروشورات',
    description: 'تصميم مطبوعات إعلانية مميزة تساعد في الترويج لنشاطك التجاري',
    link: '/portfolio#print'
  },
  {
    icon: faScroll,
    title: 'رول أب ولافتات المعارض',
    description: 'تصميم لافتات ورول أب احترافية لمعارض والمؤتمرات',
    link: '/portfolio#roll-up'
  },
  {
    icon: faUtensils,
    title: 'قوائم الطعام (منيو)',
    description: 'تصميم قوائم طعام جذابة واحترافية تعرض منتجاتك بشكل مميز',
    link: '/portfolio#menu'
  },
  {
    icon: faIdCard,
    title: 'البطاقات الشخصية',
    description: 'تصميم بطاقات أعمال احترافية تعزز هويتك المهنية',
    link: '/portfolio#business-cards'
  },
  {
    icon: faBook,
    title: 'أغلفة الكتب',
    description: 'تصميم أغلفة كتب احترافية تجذب القراء وتعكس محتوى الكتاب',
    link: '/portfolio#book-covers'
  },
  {
    icon: faEnvelopeOpen,
    title: 'بطاقات الدعوة الإلكترونية',
    description: 'تصميم دعوات إلكترونية مميزة لمختلف المناسبات',
    link: '/portfolio#invitations'
  },
  {
    icon: faAward,
    title: 'الشهادات التقديرية',
    description: 'تصميم شهادات تقديرية احترافية للمؤسسات والفعاليات',
    link: '/portfolio#certificates'
  },
  {
    icon: faAd,
    title: 'اللوحات الإعلانية',
    description: 'تصميم لوحات إعلانية وستاندات احترافية للمؤتمرات والفعاليات',
    link: '/portfolio#advertising'
  }
];

export default function Home() {
  const [showAllServices, setShowAllServices] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animatingServices, setAnimatingServices] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const visibleServices = showAllServices ? services : services.slice(0, 3);
  const additionalServices = services.slice(3);

  return (
    <IconProvider>
      <section className="hero">
        <div className="hero-content">
          <h1 className="animate-title">
            مصمم جرافيك محترف
          </h1>
          <p className="animate-description">
            أقدم تصاميم إبداعية تناسب احتياجاتك
          </p>
          <div className="hero-buttons animate-buttons">
            <Link href="/contact" className="primary-btn">
              احصل على تصميمك
            </Link>
            <a href="#services" className="secondary-btn">
              استكشف خدماتي
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>خدماتي</h2>
            <p>مجموعة من الخدمات الاحترافية لتلبية احتياجاتك</p>
          </div>
          
          <div className="services-grid">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <hr className="service-divider" />
                <Link href={service.link} className="learn-more">
                  معرفة المزيد
                </Link>
              </div>
            ))}

            {showAllServices && additionalServices.map((service, index) => (
              <div 
                key={`additional-${index}`} 
                className={`service-card ${animatingServices ? 'animate-in' : ''}`}
                style={{
                  transitionDelay: `${(index + 1) * 0.1}s`
                }}
              >
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <hr className="service-divider" />
                <Link href={service.link} className="learn-more">
                  معرفة المزيد
                </Link>
              </div>
            ))}
          </div>

          <div className="services-footer">
            <button 
              onClick={() => {
                setShowAllServices(!showAllServices);
                setAnimatingServices(true);
                setTimeout(() => setAnimatingServices(false), 1000);
              }}
              id="showMoreServices" 
              className="secondary-btn"
            >
              {showAllServices ? (
                <>
                  عرض أقل
                  <FontAwesomeIcon icon={faChevronUp} className="icon-more" />
                </>
              ) : (
                <>
                  عرض المزيد
                  <FontAwesomeIcon icon={faChevronDown} className="icon-more" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </IconProvider>
  );
} 