import Footer from './Footer.js';
import Nav from './Nav.js';
import styles from '../styles/layout.module.scss';
import { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
import Link from 'next/link.js';
import unableScroll from '@/utils/unableScroll.js';
import Img from './Img.js';

const proximaNova = localFont({
  src: [
    {
      path: '../../public/fonts/ProximaNova-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Bold.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
});

export default function Layout({ children }) {
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const inputSearchRef = useRef(null);

  const categories = [
    'gaming',
    'sport',
    'makanan',
    'otomotif',
    'entertainment',
    'lifestyle',
    'tech',
    'tutorial',
  ];

  function hiddenSearch() {
    unableScroll();
    searchRef.current?.classList.remove('showSearch');
  }

  function hiddenMobileMenu() {
    unableScroll();
    mobileMenuRef.current?.classList.remove('showMobileMenu');
  }

  function searching() {
    //
  }

  return (
    <main style={proximaNova.style}>
      <section className={styles.search} ref={searchRef}>
        <button
          type="button"
          onClick={hiddenSearch}
          className={styles.closeBtn}
        >
          <Img src={'/icons/close.svg'} alt={'close button'} />
        </button>

        <div className={styles.content}>
          <form className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Cari"
              className={styles.input}
              ref={inputSearchRef}
            />

            <button
              type="submit"
              onClick={searching}
              className={styles.inputSubmitBtn}
            >
              <Img src={'/icons/search.svg'} alt={'search'} />
            </button>
          </form>

          <p className={styles.title}>cari berdasarkan kategori</p>

          <p className={styles.categories}>
            {categories.map((category, i) => (
              <span className={styles.text} key={i}>
                <Link href={`/`} className={styles.link} key={i}>
                  {category}
                </Link>
                {i < categories.length - 1 && ' / '}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className={styles.mobileMenu} ref={mobileMenuRef}>
        <div className={styles.container}>
          <div className={styles.content}>
            <ul>
              <li>
                <Link href={`/`}>HOME</Link>
              </li>
              <li>
                <Link href={`/`}>ABOUT</Link>
              </li>
              <li>
                <Link href={`/`}>CATEGORIES</Link>
              </li>
              <li>
                <Link href={`/`}>TRENDING</Link>
              </li>
              <li>
                <Link href={`/`}>GAMING</Link>
              </li>
              <li>
                <Link href={`/`}>SPORT</Link>
              </li>
            </ul>
          </div>
          <div className={styles.closeBackground} onClick={hiddenMobileMenu} />
        </div>
      </section>

      <Nav
        mobileMenuRef={mobileMenuRef}
        searchRef={searchRef}
        inputSearchRef={inputSearchRef}
      />

      {children}

      <Footer />
    </main>
  );
}
