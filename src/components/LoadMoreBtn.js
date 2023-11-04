import { ScaleLoader } from 'react-spinners';
import styles from '../styles/loadMoreBtn.module.scss';

const LoadMoreBtn = (props) => {
  const nextLoading = props.nextLoading;

  return (
    <div className={styles.loadMoreBtn}>
      {nextLoading ? (
        <>
          <p>Memuat</p>
          <ScaleLoader color={'#252525'} loading={true} width={4} height={10} />
        </>
      ) : (
        <>
          <p>Muat lagi</p>
          <span className={styles.dropdownSymbol}>&#9207;</span>
        </>
      )}
    </div>
  );
};

export default LoadMoreBtn;
