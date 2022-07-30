import { client } from '../../utils/client';
import { GET_USERS_NFTS } from '../../utils/queries';

const GetUsersNFTs = async (
  ownerAddress: string,
  contractAddress: string,
  limit: number,
  chainIds: Array<number>
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_USERS_NFTS, {
        request: {
          ownerAddress,
          contractAddress,
          limit,
          chainIds,
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

export { GetUsersNFTs };
