import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { Agentation } from 'agentation';
import './globals.css';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Yamparala Rahul | Portfolio',
  description: 'Design Engineer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} min-h-screen flex flex-col`}>
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
