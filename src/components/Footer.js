import styles from '../styles/footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const gamingLists = [
  'mobile legends',
  'pubg',
  'valorant',
  'point blank',
  'free fire',
  'genshin impact',
  'csgo',
  'minecraft',
];

const sportLists = [
  'sepak bola',
  'futsal',
  'tenis meja',
  'sepak takraw',
  'bulu tangkis',
];

const categories = [
  'gaming',
  'sport',
  'makanan',
  'otomotif',
  'entertainment',
  'lifestyle',
];

export default function Footer() {
  const footerRef = useRef(null);
  useEffect(() => {
    if (footerRef.current) {
      const height = getComputedStyle(footerRef.current).getPropertyValue(
        'height'
      );
      document.body.style.setProperty('--footer-height', height);
    }
  }, [footerRef]);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.content}>
        {/* Logo */}
        <Link href={`/`}>
          <Image
            width={2560}
            height={501}
            src="/images/logo.png"
            alt="kasihtaumal logo"
            className={styles.logo}
          />
        </Link>

        {/* Categories */}
        <div className={styles.lists}>
          <p className={styles.title}>CATEGORIES</p>

          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <Link href={`/category/${category.replace(' ', '-')}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Gaming */}
        <div className={styles.lists}>
          <p className={styles.title}>GAMING</p>

          <ul>
            {gamingLists.map((category, i) => (
              <li key={i}>
                <Link href={`/category/${category.replace(' ', '-')}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sports */}
        <div className={styles.lists}>
          <p className={styles.title}>SPORT</p>

          <ul>
            {sportLists.map((category, i) => (
              <li key={i}>
                <Link href={`/category/${category.replace(' ', '-')}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
