import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../lib/fontawesome';

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://3lismaeel.xyz'),
  title: {
    default: '3lismaeel - مصمم جرافيك',
    template: '%s - 3lismaeel'
  },
  description: 'مصمم جرافيك محترف متخصص في تصميم السوشيال ميديا، الفلايرات، البروشورات، قوائم الطعام، البطاقات الشخصية، أغلفة الكتب والمزيد من التصاميم الإبداعية',
  keywords: [
    'تصميم سوشيال ميديا',
    'تصميم فلايرات',
    'تصميم بروشورات',
    'تصميم رول اب',
    'تصميم قوائم طعام',
    'تصميم منيو',
    'تصميم بطاقات شخصية',
    'تصميم أغلفة كتب',
    'تصميم دعوات إلكترونية',
    'تصميم شهادات',
    'تصميم لوحات إعلانية',
    'مصمم جرافيك',
    'علي إسماعيل'
  ],
  authors: [{ name: 'علي إسماعيل', url: 'https://3lismaeel.xyz' }],
  creator: 'علي إسماعيل',
  publisher: '3lismaeel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '3lismaeel - مصمم جرافيك',
    description: 'مصمم جرافيك محترف متخصص في تصميم المطبوعات وتصاميم السوشيال ميديا',
    url: 'https://3lismaeel.xyz',
    siteName: '3lismaeel',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'علي إسماعيل - خدمات تصميم جرافيك'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'علي إسماعيل - خدمات تصميم جرافيك احترافية',
    description: 'مصمم جرافيك محترف متخصص في تصميم المطبوعات وتصاميم السوشيال ميديا',
    creator: '@3lismaeel',
    images: ['/images/twitter-image.jpg']
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code'
    }
  },
  category: 'design',
  alternates: {
    canonical: 'https://3lismaeel.xyz',
    languages: {
      'ar-SA': 'https://3lismaeel.xyz'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF4D00" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-HMZ54Z29EZ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HMZ54Z29EZ');
          `}
        </Script>
      </head>
      <body className={tajawal.className}>
        <div className={`${tajawal.variable} min-h-screen flex flex-col`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
