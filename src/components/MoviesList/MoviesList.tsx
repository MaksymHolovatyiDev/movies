import styles from '@/styles/Home.module.css';
import MovieListItem from '../MovieListItem/MovieListItem';
import {MovieBaseType, MoviesArr} from '@/Types';

export default function MoviesList({movies}: MoviesArr) {
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
// Poster
// "Title": "Avatar",
//     "Year": "2009",
//         Type

//         "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     Plot
// Country
// Awards
// Metascore
// imdbRating
//              Images
