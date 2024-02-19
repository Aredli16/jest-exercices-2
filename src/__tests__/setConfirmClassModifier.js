import setConfirmClassModifier  from '../setConfirmClassModifier';

describe('setConfirmClassModifier', () => {
  it('should return confirm success when there are no errors', () => {
    const result = setConfirmClassModifier(false);
    expect(result).toEqual('confirm success');
  });

  it('should return confirm disabled when there are errors', () => {
    const result = setConfirmClassModifier(true);
    expect(result).toEqual('confirm disabled');
  });

  it('should return custom success when there are no errors and classModifier is custom', () => {
    const result = setConfirmClassModifier(false, 'custom');
    expect(result).toEqual('custom success');
  });

  it('should return custom disabled when there are errors and classModifier is custom', () => {
    const result = setConfirmClassModifier(true, 'custom');
    expect(result).toEqual('custom disabled');
  });
});
