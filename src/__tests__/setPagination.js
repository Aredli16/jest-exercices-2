import { setPagination } from '../setPagination';

describe('setPagination', () => {
  it('should return correct pagination object for given total, skip and max', () => {
    const result = setPagination({ total: 10, skip: 5, max: 2 });
    expect(result).toEqual({
      total: 10,
      numberItems: 2,
      numberPages: 4,
      currentPage: 3,
    });
  });

  it('should return correct pagination object for default total, skip and max', () => {
    const result = setPagination({});
    expect(result).toEqual({
      total: 1,
      numberItems: 1,
      numberPages: 1,
      currentPage: 1,
    });
  });

  it('should return correct pagination object when total is less than max', () => {
    const result = setPagination({ total: 2, skip: 1, max: 5 });
    expect(result).toEqual({
      total: 2,
      numberItems: 5,
      numberPages: 1,
      currentPage: 1,
    });
  });

  it('should return correct pagination object when total is equal to max', () => {
    const result = setPagination({ total: 5, skip: 1, max: 5 });
    expect(result).toEqual({
      total: 5,
      numberItems: 5,
      numberPages: 1,
      currentPage: 1,
    });
  });
});
