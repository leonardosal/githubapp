import axios from 'axios';

export const loadReposList = async token => {
  const resp = await axios('https://api.github.com/user/repos', {
    method: 'GET',
    headers: {
      Authorization: `basic ${token}`,
    },
  });
  return resp.data;
};
