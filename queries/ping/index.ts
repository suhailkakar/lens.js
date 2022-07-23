import { client } from '../../utils/client';
import { GET_PING } from '../../utils/queries';

// PING API - This returns if the API is online.
const ping = async () => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PING)
      .toPromise()
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default ping;
