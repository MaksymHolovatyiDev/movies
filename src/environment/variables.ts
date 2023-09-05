export const modalMainFields = [
  'Released',
  'Runtime',
  'Type',
  'Genre',
  'Director',
  'Writer',
  'Plot',
  'Awards',
  'Metascore',
  'imdbRating',
];

export const movieFields = ['Title', ...modalMainFields, 'Poster', 'Images'];

export enum methods {
  getMovies = 'getMovies',
  getMovieByName = 'getMovieByName',
  searchMovies = 'searchMoviesByName',
  addMovie = 'addMovie',
  updateMovie = 'updateMovie',
  deleteMovie = 'deleteMovie',
}
