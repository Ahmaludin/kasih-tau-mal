import { useEffect, useState } from 'react';
import styles from '../../styles/search.module.scss';
import ArticleLists from '@/components/ArticleLists';
import LoadMoreBtn from '@/components/LoadMoreBtn';
import { useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners';

export default function Search() {
  const router = useRouter();
  const { input } = router.query;

  const [loading, setLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [articlesData, setArticlesData] = useState({});

  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    async function getArticles() {
      setLoading(true);

      const response = await fetch(
        `${process.env.API_HOST}/articles/search/${input}?page=1&limit=12`
      );
      const data = await response.json();

      if (data.status === true && data.message === 'ARTICLES_FOUND') {
        setArticles(data.articles.docs);
        setArticlesData(data.articles);
        setLoading(false);
      }
    }

    getArticles();
  }, [input]);

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

  if (loading) {
    return (
      <div className="categoryAndSearchPageLoading">
        <ScaleLoader color={'#252525'} loading={true} width={4} height={10} />
      </div>
    );
  }

  return (
    <section className={styles.search}>
      <p className={styles.title}>Hasil dari Pencarian : &quot;{input}&quot;</p>

      <ArticleLists articles={articles} loading={loading} />

      {articlesData.hasNextPage && (
        <button type="button" onClick={getNextArticles}>
          <LoadMoreBtn nextLoading={nextLoading} />
        </button>
      )}
    </section>
  );
}
