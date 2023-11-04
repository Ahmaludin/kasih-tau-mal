import Image from 'next/image';
import validator from 'validator';

import styles from '../styles/subscribe.module.scss';
import { useEffect, useRef, useState } from 'react';

const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [subsLoading, setSubsLoading] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const [message, setMessage] = useState('');
  const [showNotif, setShowNotif] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    if (showNotif) {
      setTimeout(() => {
        setShowNotif(false);
        setMessage('');
      }, 5000);
    }
  }, [showNotif]);

  async function subscribe(e) {
    e.preventDefault();
    buttonRef.current.classList.remove('buttonDance');

    if (!name && !email) {
      setErrorName(true);
      setErrorEmail(true);
      buttonDance();
      return;
    }

    if (!name) {
      setErrorName(true);
      buttonDance();
      return;
    }

    if (!email || !validator.isEmail(email)) {
      setErrorEmail(true);
      buttonDance();
      return;
    }

    const url = `${process.env.API_HOST}subscriber/subscribe`;
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    };

    setSubsLoading(true);
    const response = await fetch(url, option);
    const data = await response.json();

    if (data.status === true) {
      setMessage('Subscribe berhasil!');
      setName('');
      setEmail('');
    } else if (data.status === false && data.message === 'ALREADY_SUBSCRIBED') {
      setMessage('Email sudah terdaftar!');
    } else {
      setMessage('Subscribe gagal!');
      setName('');
      setEmail('');
    }

    setSubsLoading(false);
    setShowNotif(true);
  }

  function onChangeName(e) {
    setName(e.target.value);
    errorName && setErrorName(false);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
    errorEmail && setErrorEmail(false);
  }

  function buttonDance() {
    if (buttonRef.current) {
      buttonRef.current.classList.add('buttonDance');
      setTimeout(() => buttonRef.current.classList.remove('buttonDance'), 300);
    }
  }

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>SUBSCRIBE</h3>

        <div className={styles.wrap}>
          <div className={styles.content}>
            <p className={styles.text}>
              Dapatkan <span>notifikasi</span> di setiap
              <span>&nbsp;update&nbsp;</span>
              biar ngga ketinggalan!
            </p>

            <form className={styles.form} onSubmit={subscribe}>
              <div className={styles.inputName}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="nama"
                  onChange={onChangeName}
                  value={name}
                  maxLength={30}
                />
                {errorName && (
                  <Image
                    src={'/icons/warning.svg'}
                    alt="warning icon"
                    width={26}
                    height={26}
                    className={styles.warningIcon}
                  />
                )}
              </div>

              <div className={styles.inputEmail}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="email@example.com"
                  onChange={onChangeEmail}
                  value={email}
                  maxLength={50}
                />
                {errorEmail && (
                  <Image
                    src={'/icons/warning.svg'}
                    alt="warning icon"
                    width={26}
                    height={26}
                    className={styles.warningIcon}
                  />
                )}
              </div>

              <button type="submit" className={styles.button} ref={buttonRef}>
                <p>Subsribe{subsLoading && ' ...'}</p>
              </button>
            </form>
          </div>

          <div className={styles.containerImg}>
            <Image
              width={1024}
              height={1024}
              src="/images/subscribe-section-image1.png"
              alt="image"
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {showNotif && (
        <div className={styles.subsNotif}>
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

export default Subscribe;
