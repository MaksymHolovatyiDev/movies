import 'dotenv/config';
import axios from 'axios';
import Notiflix from 'notiflix';
import {methods} from '@/environment/variables';

export const newReq = (
  action: string,
  setMovies: (data: any) => void,
  data?: string | any,
  toggle?: (data?: any) => void,
) => {
  const NEXT_PUBLIC_BACKEND = process.env.NEXT_PUBLIC_BACKEND;

  if (typeof NEXT_PUBLIC_BACKEND === 'string')
    switch (action) {
      case methods.getMovies:
        axios
          .post(NEXT_PUBLIC_BACKEND, {
            query: '{  getMovies {Title Year Type Poster} }',
          })
          .then(el => {
            setMovies(el.data.data.getMovies);
          });
        break;

      case methods.getMovieByName:
        axios
          .post(NEXT_PUBLIC_BACKEND, {
            query:
              'query getImages($movieTitle: String){ getMovieByName(Title: $movieTitle) {Title Released Runtime Genre Director Writer Actors Plot Awards Metascore imdbRating Type Poster Images} }',
            variables: {movieTitle: data},
          })
          .then(el => setMovies(el.data.data.getMovieByName));
        break;

      case methods.searchMovies:
        axios
          .post(NEXT_PUBLIC_BACKEND, {
            query:
              'query getMovies($movieTitle: String){ searchMoviesByName(Title: $movieTitle) {Title Year Type Poster} }',
            variables: {movieTitle: data},
          })
          .then(el => setMovies(el.data.data.searchMoviesByName));
        break;

      case methods.addMovie:
        axios
          .post(NEXT_PUBLIC_BACKEND, {
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

      case methods.updateMovie:
        axios
          .post(NEXT_PUBLIC_BACKEND, {
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

      case methods.deleteMovie:
        axios
          .post(NEXT_PUBLIC_BACKEND, {
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
