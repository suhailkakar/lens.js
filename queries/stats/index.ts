import { client } from '../../utils/client';
import { GET_GLOBAL_PROTOCOL_STATS } from '../../utils/queries';

export const GetGlobalProtocolStats = async (): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_GLOBAL_PROTOCOL_STATS)
      .toPromise()
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
