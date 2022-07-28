import { client } from '../../utils/client';
import { GET_NOTIFICATIONS } from '../../utils/queries';

const getUserNotifications = async (
  profileId: string,
  limit: number,
  token: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    client
      .query(
        GET_NOTIFICATIONS,
        {
          request: {
            profileId,
            limit,
          },
        },
        {
          fetchOptions: {
            headers: {
              'x-access-token': token,
            },
          },
        }
      )
      .toPromise()
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getUserNotifications };
