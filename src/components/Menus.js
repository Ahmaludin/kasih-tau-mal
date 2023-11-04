import styles from '../styles/menus.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Menus(props) {
  const router = useRouter();
  const route = router.route;

  const categories = props.categories;

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
    'basket',
    'voli',
  ];

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
    <ul className={styles.menus}>
      {/* Home */}
      <li>
        <Link href={`/`}>
          <p className={styles.title}>Home</p>
          {route === '/' && <div className={styles.border} />}
        </Link>
      </li>

      {/* Categories */}
      <li
        className={styles.listWithDropdown}
        onMouseEnter={() => dropdownActive('categories')}
        onMouseLeave={() => dropdownNonActive('categories')}
      >
        <p className={styles.title}>Categories</p>
        <span className={styles.dropdownSymbol}>&#9207;</span>

        {categoriesDropdownActive && (
          <ul
            className={`${styles.dropdownContent} ${styles.dropdownCategories}`}
          >
            {categories.map((category, i) => (
              <li key={i}>
                <Link href={`/category/${category.replace(' ', '-')}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      {/* Gaming */}
      <li
        className={styles.listWithDropdown}
        onMouseEnter={() => dropdownActive('gaming')}
        onMouseLeave={() => dropdownNonActive('gaming')}
      >
        <p className={styles.title}>Gaming</p>
        <span className={styles.dropdownSymbol}>&#9207;</span>

        {gamingDropdownActive && (
          <ul className={`${styles.dropdownContent} ${styles.dropdownGaming}`}>
            {gamingLists.map((category, i) => (
              <li key={i}>
                <Link href={`/category/${category.replace(' ', '-')}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      {/* Sport */}
      <li
        className={styles.listWithDropdown}
        onMouseEnter={() => dropdownActive('sport')}
        onMouseLeave={() => dropdownNonActive('sport')}
      >
        <p className={styles.title}>Sport</p>
        <span className={styles.dropdownSymbol}>&#9207;</span>

        {sportDropdownActive && (
          <ul className={`${styles.dropdownContent} ${styles.dropdownSport}`}>
            {sportLists.map((category, i) => (
              <li key={i}>
                <Link href={`/category/${category.replace(' ', '-')}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      {/* About */}
      <li>
        <Link href={`/about`}>
          <p className={styles.title}>About</p>
          {route === '/about' && <div className={styles.border} />}
        </Link>
      </li>

      <li>
        <Link href={`/contacts`}>
          <p className={styles.title}>Contacts</p>
          {route === '/contacts' && <div className={styles.border} />}
        </Link>
      </li>
    </ul>
  );
}
