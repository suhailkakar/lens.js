import { client } from '../../utils/client';
import { GET_PROFILE_REVENUE, GET_PUBLICATION_REVENUE } from '../../utils/queries';

const getProfileRevenue = async (profileId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PROFILE_REVENUE, {
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

const getPublicationRevenue = async (publicationId: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PUBLICATION_REVENUE, {
        request: {
          publicationId,
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

export { getProfileRevenue, getPublicationRevenue };
