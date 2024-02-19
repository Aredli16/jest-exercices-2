import manageConfig from '../manageConfig';

describe('manageConfig', () => {
  it('should return fetchAuthConfig with headers for BASE API', () => {
    const fetchAuthConfig = { headers: { 'Content-Type': 'application/json' }, body: {} };
    const result = manageConfig('base', fetchAuthConfig);
    expect(result).toEqual(fetchAuthConfig);
  });

  it('should return fetchAuthConfig without headers for non-BASE API', () => {
    const fetchAuthConfig = { headers: { 'Content-Type': 'application/json' }, body: {} };
    const result = manageConfig('github', fetchAuthConfig);
    expect(result).toEqual({ body: {} });
  });

  it('should return fetchAuthConfig without headers when headers are not provided', () => {
    const fetchAuthConfig = { body: {} };
    const result = manageConfig('base', fetchAuthConfig);
    expect(result).toEqual(fetchAuthConfig);
  });
});
