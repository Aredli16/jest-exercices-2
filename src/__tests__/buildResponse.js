import { buildResponse } from '../buildResponse';
import { STATUS_API } from '../setResponseError';

describe('buildResponse', () => {
  it('should throw computeDataError when status is ERROR', async () => {
    const response = {
      status: `${STATUS_API.ERROR}`,
    };
    try {
      expect(await buildResponse(response, {})).toThrow();
      await buildResponse(response, {});
    } catch (error) {
      expect(error).toEqual({detail: "", label: undefined});
    }
  })
  it('should return blob when status is SUCCESS and config.blob is true', async () => {
    const response = {
      status: `${STATUS_API.SUCCESS}`,
      blob: () => Promise.resolve(new Blob(['blob'])),
    };
    const result = await buildResponse(response, { blob: true });
    expect(result).toEqual(new Blob(['blob']));
  });

  it('should return text when status is SUCCESS and config.text is true', async () => {
    const response = {
      status: `${STATUS_API.SUCCESS}`,
      text: () => Promise.resolve('text'),
    };
    const result = await buildResponse(response, { text: true });
    expect(result).toEqual('text');
  });

  it('should return json with statusHttp when status is SUCCESS and config.blob and config.text are not true', async () => {
    const response = {
      status: `${STATUS_API.SUCCESS}`,
      json: () => Promise.resolve({ message: 'Success' }),
    };
    const result = await buildResponse(response, {});
    expect(result).toEqual({ message: 'Success', statusHttp: `${STATUS_API.SUCCESS}` });
  });

  it('should return status in response is STATUS_API is not defined', async () => {
    const response = {
      status: 0,
    };
    const result =  await buildResponse(response, {});
    expect(result).toEqual({ statusHttp: 0 });
  });
});
