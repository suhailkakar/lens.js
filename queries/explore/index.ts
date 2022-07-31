import { client } from '../../utils/client';
import { EXPLORE_PROFILES, EXPLORE_PUBLICATIONS } from '../../utils/queries';

const ExplorePublications = async (
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
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const ExploreProfiles = async (sortCriteria: any): Promise<object> => {
  let query = `
  query ExploreProfiles {
    exploreProfiles(request: { sortCriteria: ${sortCriteria} }) {
      items {
        id
        name
        bio
        isDefault
        attributes {
          displayType
          traitType
          key
          value
        }
        followNftAddress
        metadata
        handle
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            chainId
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
        }
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            chainId
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
        }
        ownedBy
        dispatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            contractAddress
            amount {
              asset {
                name
                symbol
                decimals
                address
              }
              value
            }
            recipient
          }
          ... on ProfileFollowModuleSettings {
          type
          }
          ... on RevertFollowModuleSettings {
          type
          }
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
  `;

  return new Promise((resolve, reject) => {
    client
      .query(query)
      .toPromise()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { ExplorePublications, ExploreProfiles };
