import styles from '../../styles/article.module.scss';
import Image from 'next/image';
import parse from 'html-react-parser';
import dateMaker from '@/utils/dateMaker';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import MetaHead from '@/components/MetaHead';

export default function Article(props) {
  const [article, setArticle] = useState(props.data.article);
  const [date, setDate] = useState(dateMaker(props.data.article.createdAt));
  const [imageSrc, setImgSrc] = useState(props.data.article.img);

  const [facebookShare, setFacebookShare] = useState(
    `https://www.facebook.com/sharer.php?u=${process.env.WEB_URL}article/${article.permalink}`
  );
  const [twitterShare, setTwitterShare] = useState(
    `https://twitter.com/intent/tweet?url=${process.env.WEB_URL}article/${article.permalink}&text=${article.title}&hashtags=kasihtaumal,${article.labels[0]}`
  );
  const [whatsappShare, setWhatsappShare] = useState(
    `whatsapp://send?text=${process.env.WEB_URL}article/${article.permalink}`
  );

  useEffect(() => {
    setArticle(props.data.article);
    setDate(dateMaker(props.data.article.createdAt));
    setImgSrc(props.data.article.img);

    setFacebookShare(
      `https://www.facebook.com/sharer.php?u=${process.env.WEB_URL}article/${props.data.article.permalink}`
    );
    setTwitterShare(
      `https://twitter.com/intent/tweet?url=${process.env.WEB_URL}article/${props.data.article.permalink}&text=${props.data.article.title}&hashtags=kasihtaumal,${props.data.article.labels[0]}`
    );
    setWhatsappShare(
      `whatsapp://send?text=${process.env.WEB_URL}article/${props.data.article.permalink}`
    );
  }, [props]);

  return (
    <>
      <MetaHead
        title={article.title}
        description={article.description}
        url={`${process.env.WEB_URL}article/${article.permalink}`}
        image={imageSrc}
      />

      <section className={styles.article}>
        <div className={styles.articleImgContainer}>
          <Image
            loader={() => imageSrc}
            src={imageSrc}
            alt={article.title}
            className={styles.articleImg}
            fill
            unoptimized
          />
        </div>

        <div className={styles.layout}>
          {/* left side */}
          <div className={styles.info}>
            <div className={styles.dateInfo}>
              <p className={styles.date}>{date.split(' ')[0]}</p>
              <p className={styles.monthYear}>{date.split(' ').slice(1, 3).join(' ')}</p>
            </div>

            <div className={styles.share}>
              <a href={facebookShare} target="_blank">
                <Image
                  src={'/icons/facebook.svg'}
                  alt="facebook icon"
                  width={1280}
                  height={1280}
                  className={styles.shareLink}
                />
              </a>
              <a href={whatsappShare} target="_blank">
                <Image
                  src={'/icons/whatsapp.svg'}
                  alt="whatsapp icon"
                  width={1280}
                  height={1280}
                  className={styles.shareLink}
                />
              </a>
              <a href={twitterShare} target="_blank">
                <Image
                  src={'/icons/twitter.svg'}
                  alt="twitter icon"
                  width={1280}
                  height={1280}
                  className={styles.shareLink}
                />
              </a>
            </div>
          </div>

          {/* content */}
          <div className={styles.content}>
            <h2 className={styles.title}>{article.title}</h2>

            <div className={styles.info}>
              <p>
                kategori&nbsp;:&nbsp;
                <Link href={`/category/${article.labels[0]}`}>{article.labels[0]}</Link>
                &nbsp;&nbsp;&#9830;&nbsp;&nbsp;{date}
              </p>
            </div>

            {parse(article.content)}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const permalink = context.query.permalink;

  const response = await fetch(`${process.env.API_HOST}article/${permalink}`);
  const data = await response.json();

  if (data.status === true && data.message === 'ARTICLE_FOUND') {
    return { props: { data } }; // render this page
  } else if (data.status === false && data.message === 'ARTICLE_NOT_FOUND') {
    return { notFound: true }; // go to 404 page
  }
}
