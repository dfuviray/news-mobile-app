import {useState} from 'react';
import axios from 'axios';

const endpoint = 'posts?_start=0&_limit=10';

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export default useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await api.get(endpoint);
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

  return {data, error, loading, request};
};
