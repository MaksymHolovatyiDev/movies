import {Button, TextField} from '@mui/material';
import styles from '@/styles/Home.module.css';
import {MovieType, modalFieldType} from '@/Types';
import {useEffect, useState} from 'react';
import {newReq} from '@/Req/Req';
import {useData} from '@/Providers/DataProvider';

export default function ModalFields({title, toggle}: modalFieldType) {
  const [data, setData] = useState<MovieType>();
  const {setMovies} = useData();

  useEffect(() => {
    newReq('getByName', setData, title);
  }, []);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const body: any = {};

    for (let x = 0; x < 14; x++) {
      body[evt?.target[x]?.id] = evt.target[x].value;
    }

    data
      ? newReq('update', setMovies, {body, mainTitle: title}, toggle)
      : newReq('add', setMovies, {body}, toggle);
  };

  return (
    <>
      {(data || !title) && (
        <form onSubmit={onSubmit} className={styles.form}>
          <TextField
            id="Title"
            label="Title"
            variant="standard"
            defaultValue={data?.Title ?? ''}
            required
          />
          <TextField
            id="Released"
            label="Released"
            variant="standard"
            defaultValue={data?.Released ?? ''}
            required
          />
          <TextField
            id="Runtime"
            label="Runtime"
            variant="standard"
            defaultValue={data?.Runtime ?? ''}
            required
          />
          <TextField
            id="Genre"
            label="Genre"
            variant="standard"
            defaultValue={data?.Genre ?? ''}
            required
          />
          <TextField
            id="Director"
            label="Director"
            variant="standard"
            defaultValue={data?.Director ?? ''}
            required
          />
          <TextField
            id="Writer"
            label="Writer"
            variant="standard"
            defaultValue={data?.Writer ?? ''}
            required
          />
          <TextField
            id="Actors"
            label="Actors"
            variant="standard"
            defaultValue={data?.Released ?? ''}
            required
          />
          <TextField
            id="Plot"
            label="Plot"
            variant="standard"
            defaultValue={data?.Plot ?? ''}
            required
          />
          <TextField
            id="Awards"
            label="Awards"
            variant="standard"
            defaultValue={data?.Awards ?? ''}
            required
          />
          <TextField
            id="Metascore"
            label="Metascore"
            variant="standard"
            defaultValue={data?.Metascore ?? ''}
            required
          />
          <TextField
            id="imdbRating"
            label="imdbRating"
            variant="standard"
            defaultValue={data?.imdbRating ?? ''}
            required
          />
          <TextField
            id="Type"
            label="Type"
            variant="standard"
            defaultValue={data?.Type ?? ''}
            required
          />
          <TextField
            id="Poster"
            label="Poster"
            variant="standard"
            defaultValue={data?.Poster ?? ''}
            required
          />
          <TextField
            id="Images"
            label="Images"
            variant="standard"
            defaultValue={data?.Images ?? ''}
            required
          />

          <Button type="submit" variant="contained">
            {data ? 'Update movie' : 'Add movie'}
          </Button>
        </form>
      )}
    </>
  );
}
