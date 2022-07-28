import { client } from '../../utils/client';
import { ADD_REACTION, REMOVE_REACTION } from '../../utils/queries';

const AddReaction = async (
  profileId: string,
  reaction: string,
  publicationId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        ADD_REACTION,
        {
          request: {
            profileId,
            reaction,
            publicationId,
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

const RemoveReaction = async (
  profileId: string,
  reaction: string,
  publicationId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        REMOVE_REACTION,
        {
          request: {
            profileId,
            reaction,
            publicationId,
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

export { AddReaction, RemoveReaction };
