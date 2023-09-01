export interface ModalTypes {
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
