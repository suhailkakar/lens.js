import { client } from '../../utils/client';
import {
  CREATE_COMMENT_TYPED_DATA,
  CREATE_MIRROR_TYPED_DATA,
  CREATE_POST_TYPED_DATA,
  GET_PUBLICATIONS,
  HIDE_PUBLICATION,
} from '../../utils/queries';

const CreatePostTypedData = async (
  profileId: string,
  contentURI: string,
  collectModule: Object,
  referenceModule: Object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        CREATE_POST_TYPED_DATA,
        {
          request: {
            profileId,
            contentURI,
            collectModule,
            referenceModule,
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

const createCommentTypedData = async (
  profileId: string,
  contentURI: string,
  collectModule: Object,
  referenceModule: Object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        CREATE_COMMENT_TYPED_DATA,
        {
          request: {
            profileId,
            contentURI,
            collectModule,
            referenceModule,
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

const createMirrorTypedData = async (
  profileId: string,
  publicationId: string,
  referenceModule: Object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        CREATE_MIRROR_TYPED_DATA,
        {
          request: {
            profileId,
            publicationId,
            referenceModule,
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

const getPublications = async (
  profileId: string,
  publicationTypes: string[],
  limit: number
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PUBLICATIONS, {
        request: {
          profileId,
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

const getPublication = async (publicationId: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .query(GET_PUBLICATIONS, {
        request: {
          publicationId,
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

const hidePublication = async (publicationId: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        HIDE_PUBLICATION,
        {
          request: {
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
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export {
  CreatePostTypedData,
  createCommentTypedData,
  createMirrorTypedData,
  getPublications,
  getPublication,
  hidePublication,
};
