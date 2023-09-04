import axios from 'axios';
import Notiflix from 'notiflix';

export const newReq = (
  action: string,
  setMovies: (data: any) => void,
  data?: string | any,
  toggle?: (data?: any) => void,
) => {
  switch (action) {
    case 'get':
      axios
        .post('http://localhost:5000/graphql', {
          query: '{  getMovies {Title Year Type Poster} }',
        })
        .then(el => setMovies(el.data.data.getMovies));
      break;

    case 'getByName':
      axios
        .post('http://localhost:5000/graphql', {
          query:
            'query getImages($movieTitle: String){ getMovieByName(Title: $movieTitle) {Title Released Runtime Genre Director Writer Actors Plot Awards Metascore imdbRating Type Poster Images} }',
          variables: {movieTitle: data},
        })
        .then(el => setMovies(el.data.data.getMovieByName));
      break;

    case 'search':
      axios
        .post('http://localhost:5000/graphql', {
          query:
            'query getMovies($movieTitle: String){ searchMoviesByName(Title: $movieTitle) {Title Year Type Poster} }',
          variables: {movieTitle: data},
        })
        .then(el => setMovies(el.data.data.searchMoviesByName));
      break;

    case 'add':
      axios
        .post('http://localhost:5000/graphql', {
          query:
            'mutation addMovie($body: InputMovie!){ addMovie(body: $body) {Title Year Type Poster} }',
          variables: data,
        })
        .then(el => {
          if (el?.data?.errors) throw new Error();
          setMovies(el?.data?.data?.addMovie);
          toggle!();
        })
        .catch(_ => Notiflix.Notify.failure('Movie already exist!'));
      break;

    case 'update':
      axios
        .post('http://localhost:5000/graphql', {
          query:
            'mutation updateMovie($body: InputMovie!, $mainTitle: String){ updateMovie(mainTitle: $mainTitle, body: $body) {Title Year Type Poster} }',
          variables: data,
        })
        .then(el => {
          if (el?.data?.errors) throw new Error();
          setMovies(el?.data?.data?.updateMovie);
          toggle!();
        })
        .catch(_ => Notiflix.Notify.failure('Movie doesn`t exist!'));
      break;

    case 'delete':
      axios
        .post('http://localhost:5000/graphql', {
          query:
            'mutation deleteMovie($movieTitle: String){ deleteMovie(Title: $movieTitle) {Title Year Type Poster} }',
          variables: {movieTitle: data},
        })
        .then(el => {
          console.log(el);
          if (el?.data?.errors) throw new Error();
          setMovies(el?.data?.data?.deleteMovie);
        })
        .catch(_ => Notiflix.Notify.failure('Movie doesn`t exist!'));
      break;
    default:
      break;
  }
};
