import {newReq} from '@/Req/Req';
import {methods} from '@/environment/variables';
import {useState, useEffect} from 'react';

export const useModalRender = (title: string) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    newReq(methods.getMovieByName, setData, title);
  }, []);
  return {data};
};
