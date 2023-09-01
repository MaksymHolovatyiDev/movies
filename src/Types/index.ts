export interface modalDataType {
  title: string;
}

export interface ModalTypes extends modalDataType {
  open: boolean;
  toggle: () => void;
}

export interface SearchType {
  searchText: string;
  setSearchText: (text: string) => void;
}

export interface MovieBaseType {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface MoviesArr {
  movies: MovieBaseType[];
}

export type MovieType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: number;
  imdbRating: number;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];
};
