import { client } from '../../utils/client';
import { CREATE_FOLLOW_TYPED_DATA } from '../../utils/queries';

const FollowUser = async (profile: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(
        CREATE_FOLLOW_TYPED_DATA,
        {
          profile,
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

export { FollowUser };
