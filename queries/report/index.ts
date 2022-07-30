import { client } from '../../utils/client';
import { REPORT_PUBLICATION } from '../../utils/queries';

const ReportPublication = async (
  publicationId: string,
  reason: string,
  additionalComments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    client
      .mutation(
        REPORT_PUBLICATION,
        {
          request: {
            publicationId,
            reason,
            additionalComments,
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

export { ReportPublication };
