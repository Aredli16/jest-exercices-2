import { computeDataError } from '../computeDataError';
import { setResponseError } from '../setResponseError';

describe('computeDataError', () => {
  it('should return error response with status and anomaly label when json parsing fails', async () => {
    const response = {
      status: 404,
      json: () => Promise.reject(new Error('Failed to parse JSON')),
    };
    const result = await computeDataError(response);
    expect(result).toEqual(setResponseError({
      response: {
        anomaly: { label: 'Erreur: Elément non trouvé' },
        status: 404,
      },
    }));
  });

  it('should return error response with status and data when json parsing succeeds', async () => {
    const response = {
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    };
    const result = await computeDataError(response);
    expect(result).toEqual(setResponseError({
      response: {
        ...{ message: 'Success' },
        status: 200,
      },
    }));
  });
});
