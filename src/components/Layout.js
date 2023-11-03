import { useRef } from 'react';
import { Poppins } from 'next/font/google';

import Nav from './Nav.js';
import Footer from './Footer.js';
import MobileMenu from './MobileMenu.js';
import Search from './Search.js';

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const inputSearchRef = useRef(null);

  const categories = [
    'gaming',
    'anime',
    'sport',
    'lifestyle',
    'otomotif',
    'makanan',
    'tech',
  ];

  return (
    <main className={poppins.className}>
      <Search
        searchRef={searchRef}
        inputSearchRef={inputSearchRef}
        categories={categories}
      />

      <MobileMenu mobileMenuRef={mobileMenuRef} categories={categories} />

      <Nav
        mobileMenuRef={mobileMenuRef}
        searchRef={searchRef}
        inputSearchRef={inputSearchRef}
        categories={categories}
      />

      {children}

      <Footer />
    </main>
  );
}
