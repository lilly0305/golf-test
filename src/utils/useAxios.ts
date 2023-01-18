import axios from 'axios';

const useAxios = () => {
  const accessToken = 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ';

  const instance = axios.create({
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return instance;
};

export default useAxios;
