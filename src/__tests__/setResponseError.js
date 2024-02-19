import { setResponseError, STATUS_API, STATUS_HTTP_MESSAGES } from '../setResponseError';

describe('setResponseError', () => {
  it('should return warning response with custom label and detail', () => {
    const response = {
      anomaly: { label: 'Custom Warning', detail: 'Custom Detail' },
      status: `${STATUS_API.WARNING}01`,
    };
    const result = setResponseError({ response });
    expect(result).toEqual({
      ...response.anomaly,
      type: 'danger',
      iconName: 'alert',
    });
  });

  it('should return warning response with default label and detail', () => {
    const response = {
      anomaly: {},
      status: `${STATUS_API.WARNING}01`,
    };
    const result = setResponseError({ response });
    expect(result).toEqual({
      label: STATUS_HTTP_MESSAGES[response.status],
      detail: '',
      type: 'danger',
      iconName: 'alert',
    });
  });

  it('should return error response with custom label and detail', () => {
    const response = {
      anomaly: { label: 'Custom Error', detail: 'Custom Detail' },
      status: `${STATUS_API.ERROR}01`,
    };
    const result = setResponseError({ response });
    expect(result).toEqual(response.anomaly);
  });

  it('should return error response with default label and detail', () => {
    const response = {
      anomaly: {},
      status: `${STATUS_API.ERROR}01`,
    };
    const result = setResponseError({ response });
    expect(result).toEqual({
      label: STATUS_HTTP_MESSAGES[response.status],
      detail: '',
    });
  });

  it('should return empty object for non-warning and non-error status', () => {
    const response = {
      anomaly: { label: 'Custom Message', detail: 'Custom Detail' },
      status: STATUS_API.SUCCESS,
    };
    const result = setResponseError({ response });
    expect(result).toEqual({});
  });
});
