import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-tajawal)'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--text-secondary)',
        'custom-text': 'var(--text)',
        'custom-bg': 'var(--background)',
        'card-bg': 'var(--card-bg)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};

export default config;
