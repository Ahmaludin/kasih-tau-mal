import Link from 'next/link';
import styles from '../styles/articleLists.module.scss';
import Image from 'next/image';
import dateMaker from '@/utils/dateMaker';

const ArticleLists = ({ articles }) => {
  return (
    <section className={styles.articleLists}>
      {articles.map(article => {
        const date = dateMaker(article.createdAt);

        return (
          <div className={styles.article} key={article._id}>
            <Link href={`/article/${article.permalink}`} className={styles.imgContainer}>
              <Image
                loader={() => article.img}
                src={article.img}
                alt={article.title}
                className={styles.img}
                fill
                unoptimized
              />
            </Link>

            <div className={styles.info}>
              <p className={styles.date}>{date}</p>

              <Link href={`/article/${article.permalink}`} className={styles.title}>
                <h2>{article.title}</h2>
              </Link>

              <p className={styles.description}>{article.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ArticleLists;
