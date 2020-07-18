import {useState} from 'react';
import axios from 'axios';

export default useApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMoreloading, setloadMoreloading] = useState(false);

  const [page, setPage] = useState({
    start: 0,
  });
  const limit = 10;

  const api = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
  });

  const endpoint = (start) => {
    return `posts?_start=${start}&_limit=${limit}`;
  };

  const request = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await api.get(endpoint(page.start));
      const {data: responseData} = response;

      if (!response) {
        setLoading(false);
        setError(true);
      }

      setError(false);
      setLoading(false);
      setData(responseData);
    } catch (error) {
      setError(true);
      console.log('API REQUEST ERROR ###########', error);
    }
  };

  loadMore = async () => {
    const {start} = page;
    let itemsToAdd = 10;
    const pageStart = start + itemsToAdd;

    setloadMoreloading(true);

    const response = await api.get(endpoint(pageStart));
    setPage({
      start: pageStart,
    });

    if (!response) {
      setloadMoreloading(false);
      setError(true);
    }

    setloadMoreloading(false);

    setData([...data, ...response.data]);
  };

  return {data, error, loading, loadMore, request, setloadMoreloading};
};
