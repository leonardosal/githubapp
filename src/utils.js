import base64 from 'base-64';

export const createToken = (email, password) => {
  return base64.encode(`${email}:${password}`);
};
