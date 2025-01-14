import React from 'react';
import Header from '@/components/frame/header/Header';
import Footer from '@/components/frame/footer/Footer';
import '@/style/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <body className='font-pretendard flex min-h-screen flex-col'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
