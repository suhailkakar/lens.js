import { client } from '../../utils/client';
import { SEARCH } from '../../utils/queries';

const search = async (query: string, type: string, limit: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    client
      .query(SEARCH, {
        request: {
          query,
          type,
          limit,
        },
      })
      .toPromise()
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { search };
