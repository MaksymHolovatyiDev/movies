import {createContext, useContext, ReactNode, useState, useEffect} from 'react';
import {ContextTypes, MovieBaseType} from '@/Types';
import {newReq} from '@/Req/Req';
import {methods} from '@/environment/variables';

const DataContext = createContext<ContextTypes>({} as ContextTypes);

export const useData = () => useContext(DataContext);

const DataProvider = ({children}: {children: ReactNode}) => {
  const [movies, setMovies] = useState<MovieBaseType[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText.split(' ').join(''))
      newReq(methods.searchMovies, setMovies, searchText);

    if (!searchText) newReq(methods.getMovies, setMovies);
  }, [searchText]);

  const value = {
    movies,
    setMovies,
    searchText,
    setSearchText,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
