import Footer from './Footer.js';
import Nav from './Nav.js';
import styles from '../styles/layout.module.scss';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link.js';
import unableScroll from '@/utils/unableScroll.js';
import Img from './Img.js';
import { Poppins } from 'next/font/google';
import Image from 'next/image.js';

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
    document.body.style.overflowY = 'auto';
    mobileMenuRef.current.style.display = 'none';
  }

  function searching() {
    //
  }

  return (
    <main className={poppins.className}>
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
        <div className={styles.closeBackground} onClick={hiddenMobileMenu} />

        <div className={styles.content}>
          <p className={styles.title}>Categories</p>

          <div className={styles.listContainer}>
            <ul>
              {categories.map((category, i) => (
                <li key={i}>
                  <Link
                    href={`/category/${category.replace(' ', '-')}`}
                    onClick={hiddenMobileMenu}
                  >
                    <Image
                      src={'/icons/label.svg'}
                      height={16}
                      width={16}
                      alt={'tag icon'}
                    />
                    <p>{category}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
