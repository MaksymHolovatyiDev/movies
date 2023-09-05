import {Button, TextField} from '@mui/material';
import styles from '@/styles/Home.module.css';
import {modalFieldType} from '@/Types';
import {newReq} from '@/Req/Req';
import {useData} from '@/Providers/DataProvider';
import {methods, movieFields} from '@/environment/variables';
import {useModalRender} from '@/hooks/hooks';

export default function ModalFields({title, toggle}: modalFieldType) {
  const {data} = useModalRender(title!);
  const {setMovies} = useData();

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const body: any = {};

    for (let x = 0; x < movieFields.length; x++) {
      body[evt?.target[x]?.id] = evt.target[x].value;
    }

    data
      ? newReq(methods.updateMovie, setMovies, {body, mainTitle: title}, toggle)
      : newReq(methods.addMovie, setMovies, {body}, toggle);
  };

  return (
    <>
      {(data || !title) && (
        <form onSubmit={onSubmit} className={styles.form}>
          {movieFields.map(el => (
            <TextField
              key={el}
              id={el}
              label={el}
              variant="standard"
              defaultValue={data ? data[el] : ''}
              required
            />
          ))}
          <Button type="submit" variant="contained">
            {data ? 'Update movie' : 'Add movie'}
          </Button>
        </form>
      )}
    </>
  );
}
