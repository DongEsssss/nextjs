import React from 'react';
import { Providers } from "./providers";

import '../style/globals.css'
import Header from '../components/frame/header/Header';
import Footer from '../components/frame/footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
