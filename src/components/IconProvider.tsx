'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// منع Font Awesome من إضافة CSS تلقائياً
config.autoAddCss = false;

export default function IconProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 