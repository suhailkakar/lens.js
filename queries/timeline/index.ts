import { client } from '../../utils/client';
import { GET_TIMELINE } from '../../utils/queries';

const getUserTimeline = async (profileId: string, limit: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_TIMELINE, {
        request: {
          profileId,
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

export { getUserTimeline };
