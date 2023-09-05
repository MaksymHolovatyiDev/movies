import {newReq} from '@/Req/Req';
import {methods} from '@/environment/variables';
import {useState, useEffect} from 'react';
import {useLazyQuery, useMutation} from '@apollo/client';
import Notiflix from 'notiflix';

export const useModalRender = (title: string) => {
  const [data, setData] = useState<any>();
  const {getData} = useReqQuery(methods.getMovieByName, setData, title);

  useEffect(() => {
    getData();
  }, []);
  return {data};
};

export const useReqQuery = (
  method: string,
  setMovies: (data: any) => void,
  title?: string,
) => {
  const variables = title ? {variables: {movieTitle: title}} : undefined;

  const [getData, {loading, data}] = useLazyQuery(newReq(method), variables);

  useEffect(() => {
    if (!loading && data) setMovies(data[method]);
  }, [loading]);

  return {getData};
};

export const useReqMutation = (
  method: string,
  setMovies: (data: any) => void,
  toggle?: (data?: any) => void,
) => {
  const [setData, {data, loading, error}] = useMutation(newReq(method));

  useEffect(() => {
    if (!loading && data) {
      setMovies(data[method]);
      if (toggle) toggle();
    }

    if (error) Notiflix.Notify.failure('Response error!');
  }, [loading]);

  return {setData};
};
