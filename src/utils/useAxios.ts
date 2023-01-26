import axios from 'axios';

const useAxios = () => {
  const accessToken = localStorage.getItem('accessToken');

  const instance = axios.create({
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return instance;
};

export default useAxios;
