import styles from '../styles/nav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Nav() {
  const router = useRouter();
  const route = router.route;
  const query = router.query;

  const [gamingDropdownActive, setGamingDropdownActive] = useState(false);
  const [sportDropdownActive, setSportDropdownActive] = useState(false);
  const [categoriesDropdownActive, setCategoriesDropdownActive] =
    useState(false);

  function dropdownActive(type) {
    type === 'categories'
      ? setCategoriesDropdownActive(true)
      : type === 'gaming'
      ? setGamingDropdownActive(true)
      : type === 'sport' && setSportDropdownActive(true);
  }

  function dropdownNonActive(type) {
    type === 'categories'
      ? setCategoriesDropdownActive(false)
      : type === 'gaming'
      ? setGamingDropdownActive(false)
      : type === 'sport' && setSportDropdownActive(false);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.top}>
        <Link href={`/`}>
          <Image
            width={512}
            height={512}
            src="/icons/menu.png"
            alt="menu"
            className={styles.menu}
          />
        </Link>

        <Link href={`/`}>
          <Image
            width={2560}
            height={501}
            src="/images/logo.png"
            alt="kasihtaumal logo"
            className={styles.logo}
          />
        </Link>

        <Link href={`/`}>
          <Image
            width={512}
            height={512}
            src="/icons/search.png"
            alt="search"
            className={styles.search}
          />
        </Link>
      </div>

      <ul className={styles.bottom}>
        <li>
          <Link href={`/`}>
            <p className={styles.title}>HOME</p>
            {route === '/' && <div className={styles.border} />}
          </Link>
        </li>

        <li>
          <Link href={`/about`}>
            <p className={styles.title}>ABOUT</p>
            {route === '/about' && <div className={styles.border} />}
          </Link>
        </li>

        <li
          className={styles.listWithDropdown}
          onMouseEnter={() => dropdownActive('categories')}
          onMouseLeave={() => dropdownNonActive('categories')}
        >
          <p className={styles.title}>CATEGORIES</p>
          <span className={styles.dropdownSymbol}>&#9207;</span>

          {categoriesDropdownActive && (
            <div className={styles.dropdownContent}>
              <h3>CATEGORIES</h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              fugiat in est unde eius quibusdam libero dolor harum aperiam,
              praesentium dignissimos dolores reiciendis voluptate autem
              excepturi ad magnam quae. Beatae!
            </div>
          )}
        </li>

        <li>
          <Link href={`/trending`}>
            <p className={styles.title}>TRENDING</p>
            {route === '/trending' && <div className={styles.border} />}
          </Link>
        </li>

        <li
          className={styles.listWithDropdown}
          onMouseEnter={() => dropdownActive('gaming')}
          onMouseLeave={() => dropdownNonActive('gaming')}
        >
          <p className={styles.title}>GAMING</p>
          <span className={styles.dropdownSymbol}>&#9207;</span>

          {gamingDropdownActive && (
            <div className={styles.dropdownContent}>
              <h3>GAMING</h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              fugiat in est unde eius quibusdam libero dolor harum aperiam,
              praesentium dignissimos dolores reiciendis voluptate autem
              excepturi ad magnam quae. Beatae!
            </div>
          )}
        </li>

        <li
          className={styles.listWithDropdown}
          onMouseEnter={() => dropdownActive('sport')}
          onMouseLeave={() => dropdownNonActive('sport')}
        >
          <p className={styles.title}>SPORT</p>
          <span className={styles.dropdownSymbol}>&#9207;</span>

          {sportDropdownActive && (
            <div className={styles.dropdownContent}>
              <h3>SPORT</h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              fugiat in est unde eius quibusdam libero dolor harum aperiam,
              praesentium dignissimos dolores reiciendis voluptate autem
              excepturi ad magnam quae. Beatae!
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
