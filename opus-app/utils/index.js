export const API = ({ uri, method = 'GET', headers = {}, body = null }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let options = {};
      if (method.toUpperCase() !== 'GET') {
        options = {
          ...options,
          method,
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers
          }
        };
      }
      if (body) {
        options = { ...options, body: JSON.stringify(body) };
      }

      const res = await fetch(uri, options);
      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const abc = 'abc';
