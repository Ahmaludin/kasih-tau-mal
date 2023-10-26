import Img from '@/components/Img';
import styles from '../../styles/article.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Article() {
  return (
    <section className={styles.article}>
      <div className={styles.articleImgContainer}>
        <Image
          src={'/art.jpg'}
          alt="article image"
          fill
          className={styles.articleImg}
        />
      </div>

      <div className={styles.layout}>
        <div className={styles.info}>
          <div className={styles.dateInfo}>
            <p className={styles.date}>27</p>
            <p className={styles.monthYear}>Oktober 2023</p>
          </div>

          <div className={styles.share}>
            <button className={styles.shareBtn}>
              <div className={styles.iconContainer}>
                <Image src={'/icons/facebook.svg'} alt="article image" fill />
              </div>
            </button>
            <button className={styles.shareBtn}>
              <div className={styles.iconContainer}>
                <Image src={'/icons/twitter.svg'} alt="article image" fill />
              </div>
            </button>
            <button className={styles.shareBtn}>
              <div className={styles.iconContainer}>
                <Image src={'/icons/whatsapp.svg'} alt="article image" fill />
              </div>
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Jadwal Indonesia Vs Uzbekistan pada Babak 16 Besar Asian Games 2022
          </h2>

          <p className={styles.date}>27 Oktober 2023</p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            suscipit dolor earum officia nulla delectus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate in nulla quae, tempora reprehenderit sequi, animi
            provident sint alias ut recusandae beatae. Rem quasi possimus magnam
            rerum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            obcaecati hic eos quasi dolor in veniam aspernatur, consectetur
            voluptatem ipsam nam esse illum beatae ipsa nesciunt quas excepturi
            corporis optio. Mollitia, voluptatum.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            suscipit dolor earum officia nulla delectus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate in nulla quae, tempora reprehenderit sequi, animi
            provident sint alias ut recusandae beatae. Rem quasi possimus magnam
            rerum.
          </p>
          <br />
          <div style={{ margin: '20px 20px' }}>
            <Img src={'/1.jpg'} alt="article image" />
          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            obcaecati hic eos quasi dolor in veniam aspernatur, consectetur
            voluptatem ipsam nam esse illum beatae ipsa nesciunt quas excepturi
            corporis optio. Mollitia, voluptatum.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            suscipit dolor earum officia nulla delectus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            cupiditate in nulla quae, tempora reprehenderit sequi, animi
            provident sint alias ut recusandae beatae. Rem quasi possimus magnam
            rerum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            obcaecati hic eos quasi dolor in veniam aspernatur, consectetur
            voluptatem ipsam nam esse illum beatae ipsa nesciunt quas excepturi
            corporis optio. Mollitia, voluptatum.
          </p>
        </div>
      </div>
    </section>
  );
}
