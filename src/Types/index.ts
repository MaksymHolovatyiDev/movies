export interface modalDataType {
  title?: string;
}

export interface modalFieldType extends modalDataType {
  toggle: (evt: any) => void;
}

export interface ModalTypes {
  open: boolean;
  toggle: (evt: any) => void;
  children: React.ReactNode;
}

export interface MovieBaseType {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
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

export interface ContextTypes {
  movies: MovieBaseType[];
  setMovies: (data: any) => void;
  searchText: string;
  setSearchText: (data: string) => void;
}
