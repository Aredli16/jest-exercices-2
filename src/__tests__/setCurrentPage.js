import { setCurrentPage } from '../setCurrentPage';

describe('setCurrentPage', () => {
  it('should return 1 when max is 0', () => {
    const result = setCurrentPage({ max: 0, skip: 5 });
    expect(result).toEqual(1);
  });

  it('should return 1 when skip is 0', () => {
    const result = setCurrentPage({ max: 5, skip: 0 });
    expect(result).toEqual(1);
  });

  it('should return correct page number for non-zero max and skip', () => {
    const result = setCurrentPage({ max: 5, skip: 10 });
    expect(result).toEqual(2);
  });

  it('should return 1 for non-numeric max', () => {
    const result = setCurrentPage({ max: 'abc', skip: 10 });
    expect(result).toEqual(1);
  });
});
