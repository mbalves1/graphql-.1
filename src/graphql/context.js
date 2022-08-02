import fetch from 'node-fetch';
// import { makePostDataLoader } from './post/dataloaders';
// import { getPosts } from './post/utils';

const API_URL = 'http://localhost:3000';

export const context = () => {
  return {
    // postDataLoader: makePostDataLoader(getPosts(fetch)),
    getUsers: (path = '/') => fetch(API_URL + '/users' + path),
    getPosts: (path = '/') => fetch(API_URL + '/posts' + path),
  };
};
