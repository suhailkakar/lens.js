import { client } from '../../utils/client';
import {
  GET_DEFAULT_PROFILES,
  GET_PROFILE_FROM_ID,
  GET_RECOMMENDED_PROFILES,
} from '../../utils/queries';

// Default profile API - This query returns the default profile for the wallet
export const defaultProfile = async (ethereumAddress: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_DEFAULT_PROFILES, {
        request: {
          ethereumAddress,
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

// profile by Id API - This query returns a profile using the profile id
export const profileById = async (profileId: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PROFILE_FROM_ID, {
        request: {
          profileId,
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

export const profileByHandle = async (handle: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PROFILE_FROM_ID, {
        request: {
          handle,
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

export const getRecommendedProfiles = async (): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_RECOMMENDED_PROFILES)
      .toPromise()
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
