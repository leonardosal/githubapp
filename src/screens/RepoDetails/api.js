import axios from 'axios';

export const loadCommitsList = async (url, token) => {
  const resp = await axios(`${url}/commits`, {
    method: 'GET',
    headers: {
      Authorization: `basic ${token}`,
    },
  });
  return resp.data;
};
