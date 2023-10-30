import styles from '../styles/nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import Menus from './Menus';
import { useEffect, useRef, useState } from 'react';
import disableScroll from '@/utils/disableScroll';

const montage = localFont({
  src: '../../public/fonts/MontageSerifFont-Regular.otf',
  weight: '400',
  style: 'normal',
});

export default function Nav(props) {
  const searchRef = props.searchRef;
  const mobileMenuRef = props.mobileMenuRef;
  const inputSearchRef = props.inputSearchRef;

  const [lastScroll, setLastScroll] = useState(0);

  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      lastScroll < window.scrollY
        ? navRef.current?.classList.add('navHidden')
        : navRef.current?.classList.remove('navHidden');

      setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  function showSearch() {
    disableScroll();
    searchRef.current?.classList.add('showSearch');
    inputSearchRef.current.focus();
  }

  function showMobileMenu() {
    document.body.style.overflowY = 'hidden';
    mobileMenuRef.current.style.display = 'inherit';
  }

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.containerMenu} onClick={showMobileMenu}>
            <Image
              width={512}
              height={512}
              src="/icons/menu.svg"
              alt="menu"
              className={styles.menu}
            />
          </div>

          <Link href={`/`} className={styles.logo}>
            <h1 style={montage.style}>KASIHTAUMAL</h1>
          </Link>

          <div className={styles.containerSearch} onClick={showSearch}>
            <Image
              width={512}
              height={512}
              src="/icons/search.svg"
              alt="search"
              className={styles.search}
            />
          </div>
        </div>

        <Menus />
      </div>
    </nav>
  );
}
