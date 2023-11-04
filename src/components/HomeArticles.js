import { useState } from 'react';

import LoadMoreBtn from './LoadMoreBtn';

import styles from '../styles/homeArticles.module.scss';
import ArticleLists from './ArticleLists';

export default function HomeArticles(props) {
  const [articles, setArticles] = useState(props.data.articles.docs);
  const [articlesData, setArticlesData] = useState(props.data.articles);
  const [nextLoading, setNextLoading] = useState(false);

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

  return (
    <section className={styles.articles}>
      <h3 className={styles.sectionTitle}>ARTICLES</h3>

      <ArticleLists articles={articles} />

      {articlesData.hasNextPage && (
        <button type="button" onClick={getNextArticles}>
          <LoadMoreBtn nextLoading={nextLoading} />
        </button>
      )}
    </section>
  );
}
