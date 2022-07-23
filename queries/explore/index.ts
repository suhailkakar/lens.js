import { client } from '../../utils/client';
import { EXPLORE_PROFILES, EXPLORE_PUBLICATIONS } from '../../utils/queries';

export const ExplorePublications = async (
  sortCriteria: any,
  publicationTypes: Array<string>,
  limit: number
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(EXPLORE_PUBLICATIONS, {
        request: {
          sortCriteria,
          publicationTypes,
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

export const ExploreProfiles = async (sortCriteria: any): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(EXPLORE_PROFILES, {
        request: {
          sortCriteria,
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
