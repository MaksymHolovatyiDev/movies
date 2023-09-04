import styles from '@/styles/Home.module.css';
import MovieListItem from '../MovieListItem/MovieListItem';
import {MovieBaseType} from '@/Types';
import {useData} from '@/Providers/DataProvider';

export default function MoviesList() {
  const {movies} = useData();

  return (
    <ul className={styles.listContainer}>
      {movies?.map((el: MovieBaseType) => (
        <li key={el.Poster}>
          <MovieListItem
            Title={el.Title}
            Year={el.Year}
            Poster={el.Poster}
            Type={el.Type}
          />
        </li>
      ))}
    </ul>
  );
}
