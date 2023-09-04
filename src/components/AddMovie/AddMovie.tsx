import {IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import styles from '@/styles/Home.module.css';
import MovieModal from '../MovieModal/MovieModal';
import ModalFields from '../ModalFields/ModalFields';

export default function AddMovie() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <IconButton
        aria-label="add"
        className={styles.addBtn}
        onClick={handleClick}>
        <AddIcon />
      </IconButton>
      <MovieModal open={open} toggle={handleClick}>
        <ModalFields toggle={handleClick} />
      </MovieModal>
    </>
  );
}
