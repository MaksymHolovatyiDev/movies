import {IconButton} from '@mui/material';
import {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/Home.module.css';
import {modalDataType} from '@/Types';
import MovieModal from '../MovieModal/MovieModal';
import ModalFields from '../ModalFields/ModalFields';
import {useData} from '@/Providers/DataProvider';
import {newReq} from '@/Req/Req';

export default function MovieListItemBtns({title}: modalDataType) {
  const [open, setOpen] = useState(false);
  const {setMovies} = useData();

  const onEditClick = () => {
    setOpen(prevState => !prevState);
  };

  const onDeleteClick = () => {
    newReq('delete', setMovies, title);
  };

  return (
    <>
      <div className={styles.movieBtnsContainer}>
        <IconButton aria-label="add" onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="add" onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </div>
      <MovieModal open={open} toggle={onEditClick}>
        <ModalFields title={title} toggle={onEditClick} />
      </MovieModal>
    </>
  );
}
