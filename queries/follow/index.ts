import { client } from '../../utils/client';
import { CREATE_FOLLOW_TYPED_DATA, GET_FOLLOWERS, GET_FOLLOWING } from '../../utils/queries';

const FollowUser = async (profile: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        CREATE_FOLLOW_TYPED_DATA,
        {
          request: {
            follow: [
              {
                profile,
              },
            ],
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
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const UnFollowUser = async (profile: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        CREATE_FOLLOW_TYPED_DATA,
        {
          request: {
            profile,
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
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getFollowers = async (address: string, limit: number): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_FOLLOWERS, {
        request: {
          address,
          limit,
        },
      })
      .toPromise()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getFollowings = async (address: string, limit: number): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_FOLLOWING, {
        request: {
          address,
          limit,
        },
      })
      .toPromise()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { FollowUser, UnFollowUser, getFollowers, getFollowings };
