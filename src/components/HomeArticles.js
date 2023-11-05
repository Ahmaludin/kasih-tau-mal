import { useEffect, useState } from 'react';
import ArticleLists from './ArticleLists';
import LoadMoreBtn from './LoadMoreBtn';
import styles from '../styles/homeArticles.module.scss';

export default function HomeArticles() {
  const [loading, setLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [articlesData, setArticlesData] = useState({});
  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    const response = await fetch(`${process.env.API_HOST}articles-home?page=1`);
    const data = await response.json();

    if (data.status === true) {
      setArticles(data.articles.docs);
      setArticlesData(data.articles);
      setLoading(false);
    }
  }

  async function getNextArticles() {
    setNextLoading(true);

    const response = await fetch(
      `${process.env.API_HOST}articles-home?page=${articlesData.page + 1}`
    );
    const data = await response.json();

    if (data.status === true) {
      setArticles(prev => [...prev, ...data.articles.docs]);

      const articlesData = { ...data.articles };
      delete articlesData.docs;

      setArticlesData(articlesData);
    }

    setNextLoading(false);
  }

  const SkeletonLoad = () => {
    return (
      <div className={styles.box}>
        <div className={styles.imgBox} />
        <div className={styles.text} />
        <div className={styles.text} />
        <div className={styles.text} />
        <div className={styles.text} />
        <div className={styles.text} />
      </div>
    );
  };

  return (
    <section className={styles.articles}>
      <h3 className={styles.sectionTitle}>ARTICLES</h3>

      {loading ? (
        <div className={styles.loadingContainer}>
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
        </div>
      ) : (
        <>
          <ArticleLists articles={articles} />

          {articlesData.hasNextPage && (
            <button type="button" onClick={getNextArticles}>
              <LoadMoreBtn nextLoading={nextLoading} />
            </button>
          )}
        </>
      )}
    </section>
  );
}
