import { useEffect, useRef } from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';

import styles from '../styles/footer.module.scss';

const montage = localFont({
  src: '../../public/fonts/MontageSerifFont-Regular.otf',
  weight: '400',
  style: 'normal',
});

export default function Footer({ categories }) {
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
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.main}>
            <Link href={`/`} className={styles.logo}>
              <h1 style={montage.style}>KASIHTAUMAL</h1>
            </Link>

            <ul>
              <li>
                <Link href={'/disclaimer'}>Disclaimer</Link>
              </li>
              <li>
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={'/terms-and-conditions'}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.categories}>
            <p>CATEGORIES</p>

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
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            Made with <span>love&#128151;</span> emotions, by @ahmaludin
          </p>
        </div>
      </div>
    </footer>
  );
}
