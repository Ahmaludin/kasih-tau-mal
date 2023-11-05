import Image from 'next/image';
import { Oswald } from 'next/font/google';

import styles from '../styles/header.module.scss';

const oswald = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src={'/images/sampul.jpg'}
          alt="sampul image"
          fill
          className={styles.image}
          priority
        />

        <div className={styles.text}>
          <p className={oswald.className}>
            KASIHTAUMAL
            <br />
            APA AJA, POKOKNYA KASIH TAU
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
