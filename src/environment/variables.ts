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
  getMovies = 'get',
  getMovieByName = 'getByName',
  searchMovies = 'search',
  addMovie = 'add',
  updateMovie = 'update',
  deleteMovie = 'delete',
}
