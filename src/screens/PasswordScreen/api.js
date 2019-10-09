import axios from 'axios';

export const login = async token => {
  const resp = await axios('https://api.github.com/', {
    method: 'GET',
    headers: {
      Authorization: `basic ${token}`,
    },
  });
  return resp;
};
