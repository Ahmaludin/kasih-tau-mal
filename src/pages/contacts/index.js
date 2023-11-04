import Image from 'next/image';
import styles from '../../styles/contacts.module.scss';
import MetaHead from '@/components/MetaHead';

export default function Contacts() {
  return (
    <>
      <MetaHead
        title="Contacts"
        description="Contacts website kasihtaumal"
        url={`${process.env.WEB_URL}contacts`}
      />

      <section className={styles.container}>
        <div className={styles.wrap}>
          <h2>CONTACT :</h2>

          <div className={styles.content}>
            <a href="mailto:ahmaludin90@gmail.com">
              <Image
                src={'/icons/email.svg'}
                alt="email icon"
                width={32}
                height={32}
              />
              <p>ahmaludin90@gmail.com</p>
            </a>
            <a href="https://wa.link/6ofe28" target="_blank">
              <Image
                src={'/icons/whatsapp.svg'}
                alt="whatsapp icon"
                width={32}
                height={32}
              />
              <p>+62 8951-5618-544</p>
            </a>
            <a href="https://www.instagram.com/amaal.id" target="_blank">
              <Image
                src={'/icons/instagram.svg'}
                alt="instagram icon"
                width={32}
                height={32}
              />
              <p>@amaal.id</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
