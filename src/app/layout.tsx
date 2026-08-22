import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themes/theme-provider';
import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ram Krishna Paudel | Software Engineer & Backend Developer',
  description: 'Portfolio of Ram Krishna Paudel (Poudel), a passionate Software Engineer and Backend Developer. Explore my projects, skills, and experience in scalable systems, APIs, and web development.',
  keywords: [
    'Ram Krishna Paudel', 
    'Ram Krishna Poudel', 
    'Backend Developer', 
    'Backend Engineer', 
    'Software Engineer', 
    'Software Developer',
    'Web Developer', 
    'Full Stack Developer',
    'Nepal',
    'Portfolio', 
    'Node.js', 
    'Python',
    'APIs',
    'Scalable Systems'
  ],
  authors: [{ name: 'Ram Krishna Paudel', url: 'https://www.ramkrishnapaudel55.com.np' }],
  creator: 'Ram Krishna Paudel',
  publisher: 'Ram Krishna Paudel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ramkrishnapaudel55.com.np',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ramkrishnapaudel55.com.np',
    title: 'Ram Krishna Paudel | Software Engineer & Backend Developer',
    description: 'Portfolio of Ram Krishna Paudel (Poudel), a passionate Software Engineer and Backend Developer. Explore my projects, skills, and experience.',
    siteName: 'Ram Krishna Paudel Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You can place an og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: 'Ram Krishna Paudel - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ram Krishna Paudel | Software Engineer & Backend Developer',
    description: 'Portfolio of Ram Krishna Paudel (Poudel), a passionate Software Engineer and Backend Developer. Explore my projects, skills, and experience.',
    images: ['/og-image.jpg'],
  },
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
    // Add your Google Search Console verification ID here to verify site ownership
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}