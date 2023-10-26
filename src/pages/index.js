import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import HomeArticles from '@/components/HomeArticles';

export default function Home() {
  const subscribeRef = useRef(null);
  const nameInputRef = useRef(null);

  function goToSubscribeSection() {
    subscribeRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => nameInputRef.current?.focus(), 500);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header}>
          <Image
            width={2400}
            height={620}
            src="/images/8.jpg"
            alt="header background image"
            className={styles.image}
          />

          <div className={styles.container}>
            <div className={styles.wrap}>
              <div className={styles.contentContainer}>
                <h2 className={styles.texts}>
                  <span className={`${styles.text} ${styles.layanan}`}>
                    layanan&nbsp;
                  </span>
                  <span className={`${styles.text} ${styles.informasi}`}>
                    informasi&nbsp;
                  </span>
                  <span className={`${styles.text} ${styles.dari}`}>
                    dari&nbsp;
                  </span>
                  <span className={`${styles.text} ${styles.bang}`}>
                    bang&nbsp;
                  </span>
                  <span className={`${styles.text} ${styles.ahmal}`}>
                    ahmal
                  </span>
                </h2>

                <button
                  type="button"
                  className={styles.subsBtn}
                  onClick={goToSubscribeSection}
                >
                  SUBSCIRBE
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.categories}>
          <h3 className={styles.sectionTitle}>CATEGORIES</h3>

          <div className={styles.container}>
            <div className={`${styles.category} ${styles.category1}`}>
              <div>
                <Link href={`/`}>
                  <Image
                    width={400}
                    height={400}
                    src="/images/category-gaming.jpg"
                    alt="category image"
                    className={styles.image}
                  />
                </Link>
              </div>

              <Link href={`/`} className={styles.title}>
                GAMING
              </Link>
              <p className={styles.info}>
                Yang suka nge-game gass langsung aja kesini.
              </p>
            </div>

            <div className={`${styles.category} ${styles.category2}`}>
              <div>
                <Link href={`/`}>
                  <Image
                    width={400}
                    height={400}
                    src="/images/category-entertainment.jpg"
                    alt="category image"
                    className={styles.image}
                  />
                </Link>
              </div>

              <Link href={`/`} className={styles.title}>
                ENTERTAINMENT
              </Link>
              <p className={styles.info}>
                Hiburan dari seluruh dunia melupakan badmood mu.
              </p>
            </div>

            <div className={`${styles.category} ${styles.category3}`}>
              <div>
                <Link href={`/`}>
                  <Image
                    width={400}
                    height={400}
                    src="/images/category-sport.jpg"
                    alt="category image"
                    className={styles.image}
                  />
                </Link>
              </div>

              <Link href={`/`} className={styles.title}>
                SPORT
              </Link>
              <p className={styles.info}>
                Sepak bola, basket, voli, bulu tangkis, dan lain-lain.
              </p>
            </div>

            <div className={`${styles.category} ${styles.category4}`}>
              <div>
                <Link href={`/`}>
                  <Image
                    width={400}
                    height={400}
                    src="/images/category-lifestyle.jpg"
                    alt="category image"
                    className={styles.image}
                  />
                </Link>
              </div>

              <Link href={`/`} className={styles.title}>
                LIFESTYLE
              </Link>
              <p className={styles.info}>
                Lengkapi harimu dengan membaca artikel gaya hidup.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.subscribe} ref={subscribeRef}>
          <div className={styles.container}>
            <h3 className={styles.sectionTitle}>SUBSCRIBE</h3>

            <div className={styles.wrap}>
              <div className={styles.content}>
                <p className={styles.text}>
                  Dapatkan <span>notifikasi</span> di setiap
                  <span>&nbsp;update&nbsp;</span>
                  biar ngga ketinggalan!
                </p>

                <form className={styles.form}>
                  <div className={styles.inputName}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="nama lengkap"
                      ref={nameInputRef}
                    />
                  </div>

                  <div className={styles.inputEmail}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="email@example.com"
                    />
                  </div>

                  <button type="submit" className={styles.button}>
                    SUBSCRIBE
                  </button>
                </form>
              </div>

              <div className={styles.containerImg}>
                <Image
                  width={1024}
                  height={1024}
                  src="/images/subscribe-section-image1.png"
                  alt="image"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>

        <HomeArticles />
      </main>
    </>
  );
}
