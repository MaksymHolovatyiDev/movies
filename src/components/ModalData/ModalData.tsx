import {modalDataType} from '@/Types';
import styles from '@/styles/Home.module.css';
import {useModalRender} from '@/hooks/hooks';
import {modalMainFields} from '@/environment/variables';

export default function ModalData({title}: modalDataType) {
  const {data} = useModalRender(title!);

  return (
    <>
      <img
        src={data?.Poster}
        className={styles.modalPoster}
        alt={data?.Title}
      />
      <p className={styles.title}>{data?.Title}</p>
      <div>
        {modalMainFields.map(el => (
          <p className={styles.dataText}>
            <span className={styles.dataBoldText}>{el}:</span>{' '}
            {data ? data[el] : ''}
          </p>
        ))}
      </div>
      <div>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Screens:</span>
        </p>
        <ul>
          {data?.Images.map((el: string) => (
            <li key={el}>
              <img src={el} className={styles.modalPoster} alt={data?.Title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
