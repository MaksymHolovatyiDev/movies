import {Button, TextField} from '@mui/material';
import styles from '@/styles/Home.module.css';
import {modalFieldType} from '@/Types';
import {newReq} from '@/Req/Req';
import {useData} from '@/Providers/DataProvider';
import {methods, movieFields} from '@/environment/variables';
import {useModalRender, useReqMutation} from '@/hooks/hooks';

export default function ModalFields({title, toggle}: modalFieldType) {
  const {data} = useModalRender(title!);
  const {setMovies} = useData();
  const {setData: addMovie} = useReqMutation(
    methods.addMovie,
    setMovies,
    toggle,
  );

  const {setData: updateMovie} = useReqMutation(
    methods.updateMovie,
    setMovies,
    toggle,
  );

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const body: any = {};

    for (let x = 0; x < movieFields.length; x++) {
      body[evt?.target[x]?.id] = evt.target[x].value;
    }

    data
      ? updateMovie({variables: {body, mainTitle: title}})
      : addMovie({variables: {body}});
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
