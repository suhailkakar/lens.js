import { client } from '../../utils/client';
import { AUTHENTICATION, GET_CHALLENGE, REFRESH_AUTHENTICATION, VERIFY } from '../../utils/queries';

export const getChallenge = async (address: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_CHALLENGE, {
        request: {
          address,
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

export const Authenticate = async (address: string, signature: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(AUTHENTICATION, {
        request: {
          address,
          signature,
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

export const RefreshToken = async (refreshToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(REFRESH_AUTHENTICATION, {
        request: {
          refreshToken,
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

export const verify = async (accessToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(VERIFY, {
        request: {
          accessToken,
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
