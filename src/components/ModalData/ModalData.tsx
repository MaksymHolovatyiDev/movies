import {useState, useEffect} from 'react';
import {MovieType, modalDataType} from '@/Types';
import styles from '@/styles/Home.module.css';
import {newReq} from '@/Req/Req';

export default function ModalData({title}: modalDataType) {
  const [data, setData] = useState<MovieType>();

  useEffect(() => {
    newReq('getByName', setData, title);
  }, []);

  return (
    <>
      <img
        src={data?.Poster}
        className={styles.modalPoster}
        alt={data?.Title}
      />
      <p className={styles.title}>{data?.Title}</p>
      <div>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Released:</span>{' '}
          {data?.Released}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Runtime:</span> {data?.Runtime}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Type:</span> {data?.Type}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Genre:</span> {data?.Genre}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Director:</span>{' '}
          {data?.Director}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Writer:</span> {data?.Writer}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Plot:</span> {data?.Plot}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Awards:</span> {data?.Awards}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>Metascore:</span>{' '}
          {data?.Metascore}
        </p>
        <p className={styles.dataText}>
          <span className={styles.dataBoldText}>imdbRating:</span>{' '}
          {data?.imdbRating}
        </p>
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
