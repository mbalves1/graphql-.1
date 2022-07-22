import fetch from 'node-fetch';

const API_URL = 'http://localhost:3000';

export const context = () => {
  return {
    getUsers: (path = '/') => {
      const url = `${API_URL}/users${path}`;
      return fetch(url);
    },
    getPosts: (path = '/') => {
      const url = `${API_URL}/posts${path}`;
      return fetch(url);
    },
  };
};
