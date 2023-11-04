import Image from 'next/image';
import styles from '../styles/pageNotFound.module.scss';
import Link from 'next/link';

const Page404 = () => {
  return (
    <section className={styles.page404}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={'/images/happy.png'}
            alt="404"
            fill
            className={styles.img}
          />
        </div>

        <div className={styles.texts}>
          <p className={styles.title}>404 NOT FOUND</p>
          <p className={styles.desc}>
            Opps...! Halaman yang kamu cari
            <br />
            sepertinya tidak ditemukan!
          </p>

          <Link href={'/'} className={styles.btn}>
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;
