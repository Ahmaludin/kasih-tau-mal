import { useEffect, useState } from 'react';
import styles from '../../styles/search.module.scss';
import ArticleLists from '@/components/ArticleLists';
import LoadMoreBtn from '@/components/LoadMoreBtn';

export default function Search(props) {
  const [input, setInput] = useState(props.input);
  const [articles, setArticles] = useState(props.data.articles.docs);
  const [articlesData, setArticlesData] = useState(props.data.articles);
  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    setInput(props.input);
    setArticles(props.data.articles.docs);
    setArticlesData(props.data.articles);
  }, [props]);

  async function getNextArticles() {
    setNextLoading(true);

    const response = await fetch(
      `${process.env.API_HOST}/articles/search/${input}?page=${
        articlesData.page + 1
      }&limit=12`
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

  return (
    <section className={styles.search}>
      <p className={styles.title}>Hasil Pencarian : {input}</p>

      <ArticleLists articles={articles} />

      {!articlesData.hasNextPage && (
        <button type="button" onClick={getNextArticles}>
          <LoadMoreBtn nextLoading={nextLoading} />
        </button>
      )}
    </section>
  );
}

export async function getServerSideProps(context) {
  const input = context.query.input;

  const response = await fetch(
    `${process.env.API_HOST}/articles/search/${input}?page=1&limit=12`
  );
  const data = await response.json();

  return { props: { data, input } };
}
