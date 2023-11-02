import Footer from './Footer.js';
import Nav from './Nav.js';
import styles from '../styles/layout.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
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

  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (searchInput) {
      setLoading(true);
    } else {
      setLoading(false);
      setData(null);
    }
  }, [searchInput]);

  const delayRef = useRef(null);
  const searching = useCallback(async () => {
    if (searchInput) {
      const response = await fetch(
        `${process.env.API_HOST}articles/search/${searchInput}?page=1&limit=5`
      );
      const data = await response.json();

      setData(data);
      setLoading(false);
    }
  }, [searchInput]);

  useEffect(() => {
    clearTimeout(delayRef.current);
    delayRef.current = setTimeout(searching, 300);

    return () => clearTimeout(delayRef.current);
  }, [searchInput, searching]);

  function clearSearchInput() {
    setSearchInput('');
    inputSearchRef.current.focus();
  }

  function hiddenSearch() {
    unableScroll();
    searchRef.current?.classList.remove('showSearch');
    setSearchInput('');
    setData(null);
  }

  function hiddenMobileMenu() {
    document.body.style.overflowY = 'auto';
    mobileMenuRef.current.style.display = 'none';
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
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />

            {searchInput && (
              <button
                type="button"
                onClick={clearSearchInput}
                className={styles.clearBtn}
              >
                <Img src={'/icons/close.svg'} alt={'input clear icon'} />
              </button>
            )}
          </form>

          <div className={styles.bottom}>
            <div className={styles.results}>
              {loading && <p className={styles.loading}>.....</p>}

              {!loading && data && (
                <>
                  {data.status === true ? (
                    <div className={styles.resultLists}>
                      <ul>
                        {data.articles.docs.map((article) => {
                          return (
                            <li key={article._id} onClick={hiddenSearch}>
                              <Link
                                href={`/article/${article.permalink}`}
                                className={styles.articleLink}
                              >
                                {article.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                      {data.articles.hasNextPage && (
                        <p className={styles.moreLink}>
                          <Link
                            href={`/search/${searchInput}`}
                            onClick={hiddenSearch}
                          >
                            Lihat selengkapnya...
                          </Link>
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className={styles.noResults}>Tidak ada hasil</p>
                  )}
                </>
              )}
            </div>

            <p className={styles.title}>cari berdasarkan kategori</p>

            <p className={styles.categories}>
              {categories.map((category, i) => (
                <span className={styles.text} key={i}>
                  <Link
                    href={`/category/${category}`}
                    className={styles.link}
                    key={i}
                    onClick={hiddenSearch}
                  >
                    {category}
                  </Link>
                  {i < categories.length - 1 && ' / '}
                </span>
              ))}
            </p>
          </div>
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
