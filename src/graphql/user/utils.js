export const getUsers =
  (fetch) =>
  (path = '/') => {
    return fetch('http://localhost:3000/users' + path);
  };
