import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themes/theme-provider';
import NavBar from '@/components/shared/NavBar';
import Footer from '@/components/sections/Footer';
import type { Metadata } from 'next';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ram Krishna Paudel | Backend Developer & Software Engineer',
  description: 'Portfolio of Ram Krishna Paudel. Discover my projects, skills, and experience as a Backend Developer specializing in scalable systems and APIs.',
  keywords: ['Ram Krishna Paudel', 'Ram Krishna Paudel portfolio', 'Backend Developer', 'Software Engineer', 'Web Developer', 'Nepal', 'Portfolio', 'Full Stack Developer', 'Node.js', 'Python'],
  authors: [{ name: 'Ram Krishna Paudel' }],
  creator: 'Ram Krishna Paudel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ram Krishna Paudel | Backend Developer',
    description: 'Portfolio of Ram Krishna Paudel. Discover my projects, skills, and experience.',
    siteName: 'Ram Krishna Paudel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ram Krishna Paudel | Backend Developer',
    description: 'Portfolio of Ram Krishna Paudel. Discover my projects, skills, and experience.',
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