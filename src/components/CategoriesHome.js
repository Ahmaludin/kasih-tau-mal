import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/categoriesHome.module.scss';

const CategoriesHome = () => {
  return (
    <section className={styles.categories}>
      <h3 className={styles.sectionTitle}>CATEGORIES</h3>

      <div className={styles.container}>
        <div className={`${styles.category} ${styles.category1}`}>
          <div>
            <Link href={`/category/gaming`}>
              <Image
                width={400}
                height={400}
                src="/images/category-gaming.jpg"
                alt="category image"
                className={styles.image}
              />
            </Link>
          </div>

          <Link href={`/category/gaming`} className={styles.title}>
            GAMING
          </Link>
          <p className={styles.info}>
            Yang suka nge-game gass langsung aja kesini.
          </p>
        </div>

        <div className={`${styles.category} ${styles.category2}`}>
          <div>
            <Link href={`/category/anime`}>
              <Image
                width={400}
                height={400}
                src="/images/category-anime.jpg"
                alt="category image"
                className={styles.image}
              />
            </Link>
          </div>

          <Link href={`/category/anime`} className={styles.title}>
            ANIME
          </Link>
          <p className={styles.info}>
            Apakah dirimu itu seorang wibu? Cocok banget nih.
          </p>
        </div>

        <div className={`${styles.category} ${styles.category3}`}>
          <div>
            <Link href={`/category/sport`}>
              <Image
                width={400}
                height={400}
                src="/images/category-sport.jpg"
                alt="category image"
                className={styles.image}
              />
            </Link>
          </div>

          <Link href={`/category/sport`} className={styles.title}>
            SPORT
          </Link>
          <p className={styles.info}>
            Sepak bola, basket, voli, bulu tangkis, dan lain-lain.
          </p>
        </div>

        <div className={`${styles.category} ${styles.category4}`}>
          <div>
            <Link href={`/category/lifestyle`}>
              <Image
                width={400}
                height={400}
                src="/images/category-lifestyle.jpg"
                alt="category image"
                className={styles.image}
              />
            </Link>
          </div>

          <Link href={`/category/lifestyle`} className={styles.title}>
            LIFESTYLE
          </Link>
          <p className={styles.info}>
            Lengkapi harimu dengan membaca artikel gaya hidup.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;
