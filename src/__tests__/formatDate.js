import { isValidDate, formatDate, setDate } from '../formatDate';

describe('isValidDate', () => {
  it('should return false for null', () => {
    const result = isValidDate(null);
    expect(result).toEqual(false);
  });

  it('should return false for undefined', () => {
    const result = isValidDate(undefined);
    expect(result).toEqual(false);
  });

  it('should return true for valid date string', () => {
    const result = isValidDate('01/01/1970');
    expect(result).toEqual(true);
  });
});

describe('formatDate', () => {
  it('should return empty date for empty string', () => {
    const result = formatDate('');
    expect(result).toEqual('');
  });

  it('should return formatted date for valid date string', () => {
    const result = formatDate('2022-12-31');
    expect(result).toEqual('31/12/2022');
  });

  it('should return 01/01/1970 if no date is specified', () => {
    const result = formatDate()
    expect(result).toEqual('01/01/1970');
  });
});

describe('setDate', () => {
  it('should return empty string for invalid date', () => {
    const result = setDate({ date:  null });
    expect(result).toEqual('');
  });

  it('should return empty string for invalid date', () => {
    const result = setDate({ date:  '' });
    expect(result).toEqual('');
  });

  it('should return formatted date for valid date', () => {
    const result = setDate({ date: '2022-12-31' });
    expect(result).toEqual('31/12/2022');
  });
});
