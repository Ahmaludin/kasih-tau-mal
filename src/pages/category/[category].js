import React, { useEffect, useState } from 'react';
import styles from '../../styles/category.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ArticleLists from '@/components/ArticleLists';
import LoadMoreBtn from '@/components/LoadMoreBtn';
import MetaHead from '@/components/MetaHead';

const Category = props => {
  const [label, setLabel] = useState(props.label);
  const [articles, setArticles] = useState(props.data.articles.docs);
  const [articlesData, setArticlesData] = useState(props.data.articles);

  const [nextLoading, setNextLoading] = useState(false);

  useEffect(() => {
    setLabel(props.label);
    setArticles(props.data.articles.docs);
    setArticlesData(props.data.articles);
  }, [props]);

  async function getNextArticles() {
    setNextLoading(true);

    const response = await fetch(
      `${process.env.API_HOST}articles-label/${label}?page=${articlesData.page + 1}`
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
    <>
      <MetaHead
        title={`Kategori ${label}`}
        description={`Kategori ${label}`}
        url={`${process.env.WEB_URL}category/${label}`}
      />

      <section className={styles.articles}>
        <h3 className={styles.labelArea}>&quot;{label.replace('-', ' ')}&quot; area</h3>

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

export async function getServerSideProps(context) {
  const label = context.query.category;

  const response = await fetch(`${process.env.API_HOST}articles-label/${label}?page=1`);
  const data = await response.json();

  if (data.status === true && data.message === 'ARTICLES_FOUND') {
    return { props: { data, label } }; // render this page
  } else if (data.status === false && data.message === 'ARTICLES_NOT_FOUND') {
    return { notFound: true }; // go to 404 page
  }
}
