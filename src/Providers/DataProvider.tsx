import {createContext, useContext, ReactNode, useState, useEffect} from 'react';
import {ContextTypes, MovieBaseType} from '@/Types';
import {methods} from '@/environment/variables';
import {useReqQuery} from '@/hooks/hooks';

const DataContext = createContext<ContextTypes>({} as ContextTypes);

export const useData = () => useContext(DataContext);

const DataProvider = ({children}: {children: ReactNode}) => {
  const [movies, setMovies] = useState<MovieBaseType[]>([]);
  const [searchText, setSearchText] = useState('');
  const {getData} = useReqQuery(methods.getMovies, setMovies);
  const {getData: getSearchData} = useReqQuery(
    methods.searchMovies,
    setMovies,
    searchText,
  );

  useEffect(() => {
    if (searchText.split(' ').join('')) getSearchData();

    if (!searchText) getData();
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
