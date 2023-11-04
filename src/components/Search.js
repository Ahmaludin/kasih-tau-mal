import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link.js';
import unableScroll from '@/utils/unableScroll.js';
import styles from '../styles/searchComponent.module.scss';
import Image from 'next/image.js';
import { useRouter } from 'next/router.js';

export default function Search(props) {
  const router = useRouter();

  const categories = props.categories;
  const searchRef = props.searchRef;
  const inputSearchRef = props.inputSearchRef;

  const [loading, setLoading] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const [data, setData] = useState(null);

  const [indexList, setIndexList] = useState(0);
  const [activeArticle, setArticleUrl] = useState(null);

  // keydown event
  useEffect(() => {
    const searchRefCurrent = searchRef.current;

    searchRefCurrent.addEventListener('keydown', keyDown);
    return () => searchRefCurrent.removeEventListener('keydown', keyDown);
  });

  function keyDown(e) {
    if (data && data.status === true) {
      if (e.key === 'ArrowDown' && indexList < data.articles.docs.length) {
        setIndexList(prev => prev + 1);
        setArticleUrl(data.articles.docs[indexList]);
      }

      if (e.key === 'ArrowUp' && indexList !== 0) {
        setIndexList(prev => prev - 1);
        indexList === 1
          ? setArticleUrl(null)
          : setArticleUrl(data.articles.docs[indexList - 2]);

        e.preventDefault();
      }

      if (e.key === 'Enter') {
        hiddenSearch();
        activeArticle
          ? router.push(`/article/${activeArticle.permalink}`)
          : router.push(`/search/${searchInput}`);
      }
    }
  }

  useEffect(() => {
    setIndexList(0);
    setArticleUrl(null);

    if (searchInput) {
      setLoading(true);
    } else {
      setLoading(false);
      setData(null);
    }
  }, [searchInput]);

  // fetch 5 articles function
  const searching = useCallback(async () => {
    if (searchInput) {
      const url = `${process.env.API_HOST}articles/search/${searchInput}?page=1&limit=5`;
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    }
  }, [searchInput]);

  // delay 300ms function
  const delayRef = useRef(null);
  useEffect(() => {
    clearTimeout(delayRef.current);
    delayRef.current = setTimeout(searching, 300);

    return () => clearTimeout(delayRef.current);
  }, [searchInput, searching]);

  // clear input function
  function clearSearchInput() {
    setSearchInput('');
    inputSearchRef.current.focus();
  }

  // hidden this component function
  function hiddenSearch() {
    unableScroll();
    searchRef.current?.classList.remove('showSearch');

    setSearchInput('');
    setData(null);
    setIndexList(0);
    setArticleUrl(null);
  }

  return (
    <section className={styles.search} ref={searchRef}>
      <button type="button" onClick={hiddenSearch} className={styles.closeBtn}>
        <Image
          src={'/icons/close.svg'}
          alt="close button"
          width={42}
          height={42}
        />
      </button>

      <div className={styles.content}>
        <div className={styles.inputContainer}>
          <Image
            src={'/icons/search.svg'}
            alt="clear button"
            width={24}
            height={24}
            style={{ opacity: '.3' }}
          />

          <input
            type="text"
            placeholder="Cari"
            className={styles.input}
            ref={inputSearchRef}
            onChange={e => setSearchInput(e.target.value)}
            value={searchInput}
          />

          {searchInput && (
            <button
              type="button"
              onClick={clearSearchInput}
              style={{ marginTop: '8px' }}
            >
              <Image
                src={'/icons/close.svg'}
                alt="clear button"
                width={22}
                height={22}
              />
            </button>
          )}
        </div>

        <div className={styles.bottom}>
          <div className={styles.results}>
            {loading && <p className={styles.loading}>.....</p>}

            {!loading && data && (
              <>
                {data.status === true ? (
                  <div className={styles.resultLists}>
                    <ul>
                      {data.articles.docs.map((article, i) => (
                        <li key={article._id} onClick={hiddenSearch}>
                          <Link
                            href={`/article/${article.permalink}`}
                            className={`${styles.articleLink} ${
                              i + 1 === indexList && styles.articleLinkActive
                            }`}
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* {data.articles.hasNextPage && (
                      <p className={styles.moreLink}>
                        <span onClick={hiddenSearch}>Lihat selengkapnya...</span>
                      </p>
                    )} */}
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
  );
}
