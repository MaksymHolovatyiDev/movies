import styles from '@/styles/Home.module.css';
import {useState} from 'react';
import MovieModal from '@/components/MovieModal/MovieModal';
import {MovieBaseType} from '@/Types';
import MovieListItemBtns from '../MovieListItemBtns/MovieListItemBtns';
import ModalData from '../ModalData/ModalData';
import {Button} from '@mui/material';

export default function MovieListItem({
  Title,
  Year,
  Poster,
  Type,
}: MovieBaseType) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <img src={Poster} className={styles.poster} alt={Title} />
        <p className={styles.title}>{Title}</p>
        <div className={styles.flexContainer}>
          <p className={styles.mainData}>{Year}</p>
          <p className={styles.mainData}>{Type}</p>
        </div>
        <MovieListItemBtns title={Title} />
        <Button type="button" onClick={handleClick}>
          More info
        </Button>
      </div>

      <MovieModal open={open} toggle={handleClick}>
        <ModalData title={Title} />
      </MovieModal>
    </>
  );
}
