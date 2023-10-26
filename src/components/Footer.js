import styles from '../styles/footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const proximaNova = localFont({
  src: [
    {
      path: '../../public/fonts/ProximaNova-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Bold.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
});

export default function Footer() {
  return (
    <footer className={styles.footer} style={proximaNova.style}>
      <div className={styles.content}>
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
            <li>
              <Link href={`/`}>Gaming</Link>
            </li>
            <li>
              <Link href={`/`}>Entertainment</Link>
            </li>
            <li>
              <Link href={`/`}>Sport</Link>
            </li>
            <li>
              <Link href={`/`}>Lifestyle</Link>
            </li>
          </ul>
        </div>

        {/* Gaming */}
        <div className={styles.lists}>
          <p className={styles.title}>GAMING</p>

          <ul>
            <li>
              <Link href={`/`}>Mobile Legend</Link>
            </li>
            <li>
              <Link href={`/`}>PUBG</Link>
            </li>
            <li>
              <Link href={`/`}>Valorant</Link>
            </li>
            <li>
              <Link href={`/`}>Point Blank</Link>
            </li>
            <li>
              <Link href={`/`}>Free Fire</Link>
            </li>
            <li>
              <Link href={`/`}>Genshin Impact</Link>
            </li>
            <li>
              <Link href={`/`}>CSGO</Link>
            </li>
            <li>
              <Link href={`/`}>Minecraft</Link>
            </li>
          </ul>
        </div>

        {/* Sports */}
        <div className={styles.lists}>
          <p className={styles.title}>SPORT</p>

          <ul>
            <li>
              <Link href={`/`}>Sepak Bola</Link>
            </li>
            <li>
              <Link href={`/`}>Futsal</Link>
            </li>
            <li>
              <Link href={`/`}>Tenis Meja</Link>
            </li>
            <li>
              <Link href={`/`}>Sepak Takraw</Link>
            </li>
            <li>
              <Link href={`/`}>Bulu Tangkis</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
