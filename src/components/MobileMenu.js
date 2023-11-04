import Link from 'next/link.js';
import Image from 'next/image.js';

import styles from '../styles/mobileMenu.module.scss';

export default function MobileMenu(props) {
  const mobileMenuRef = props.mobileMenuRef;
  const categories = props.categories;

  function hiddenMobileMenu() {
    document.body.style.overflowY = 'auto';
    mobileMenuRef.current.style.display = 'none';
  }

  return (
    <section className={styles.mobileMenu} ref={mobileMenuRef}>
      <div className={styles.closeBackground} onClick={hiddenMobileMenu} />

      <div className={styles.content}>
        <p className={styles.title}>Categories</p>

        <div className={styles.listContainer}>
          <ul>
            {categories.map((category, i) => (
              <li key={i}>
                <Link
                  href={`/category/${category.replace(' ', '-')}`}
                  onClick={hiddenMobileMenu}
                >
                  <Image
                    src={'/icons/label.svg'}
                    height={16}
                    width={16}
                    alt={'tag icon'}
                  />
                  <p>{category}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
