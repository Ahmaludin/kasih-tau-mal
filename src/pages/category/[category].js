import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { ScaleLoader } from 'react-spinners';
import MetaHead from '@/components/MetaHead';
import ArticleLists from '@/components/ArticleLists';
import LoadMoreBtn from '@/components/LoadMoreBtn';
import styles from '../../styles/category.module.scss';

const Category = () => {
  const router = useRouter();
  const { category: label } = router.query;

  const [loading, setLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [articlesData, setArticlesData] = useState({});

  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    async function getArticles() {
      setLoading(true);

      const response = await fetch(
        `${process.env.API_HOST}articles-label/${label}?page=1`
      );
      const data = await response.json();

      if (data.status === false && data.message === 'ARTICLES_NOT_FOUND') {
        setArticles([]);
        setArticlesData({});
        setLoading(false);
        return;
      }

      if (data.status === true && data.message === 'ARTICLES_FOUND') {
        setArticles(data.articles.docs);
        setArticlesData(data.articles);
        setLoading(false);
      }
    }

    label && getArticles();
  }, [label]);

  async function getNextArticles() {
    setNextLoading(true);

    const response = await fetch(
      `${process.env.API_HOST}articles-label/${label}?page=${
        articlesData.page + 1
      }`
    );

    const data = await response.json();

    if (data.status === true) {
      setArticles(prev => [...prev, ...data.articles.docs]);

      const articlesData = { ...data.articles };
      delete articlesData.docs;
      setArticlesData(articlesData);

      setNextLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="categoryAndSearchPageLoading">
        <ScaleLoader color={'#252525'} loading={true} width={4} height={10} />
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="categoryAndSearchPageLoading">
        <p>Opps...! Tidak ada label {label}</p>
      </div>
    );
  }

  return (
    <>
      <MetaHead
        title={`Kategori ${label}`}
        description={`Kategori ${label}`}
        url={`${process.env.WEB_URL}category/${label}`}
      />

      <section className={styles.articles}>
        <h3 className={styles.labelArea}>
          area &quot;{label.replace('-', ' ')}&quot;
        </h3>

        {articles.length > 1 && (
          <Link href={`/article/${articles[0].permalink}`}>
            <div className={styles.firstArticle}>
              <Image
                loader={() => articles[0].img}
                src={articles[0].img}
                alt={articles[0].title}
                className={styles.img}
                fill
                unoptimized
              />

              <div className={styles.titleContainer}>
                <h3 className={styles.title}>{articles[0].title}</h3>
              </div>
            </div>
          </Link>
        )}

        <ArticleLists
          articles={articles.map((article, i) =>
            articles.length > 1 ? i !== 0 && article : article
          )}
          categoryPage={true}
        />

        {articlesData.hasNextPage && (
          <button type="button" onClick={getNextArticles}>
            <LoadMoreBtn nextLoading={nextLoading} />
          </button>
        )}
      </section>
    </>
  );
};

export default Category;
