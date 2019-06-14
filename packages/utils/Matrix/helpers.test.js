import { getIndexFromXAndY, getXAndYFromIndex } from './helpers';

describe('getIndexFromXAndY', () => {
  test('returns the right index for a 1-value matrix', () => {
    expect(getIndexFromXAndY(1, 0, 0)).toBe(0);
  });

  test('returns the right index for a 2x2 matrix', () => {
    expect(getIndexFromXAndY(2, 1, 1)).toBe(3);
  });

  test('returns the right index for a 4x4 matrix', () => {
    expect(getIndexFromXAndY(4, 3, 3)).toBe(15);
  });

  test('returns the right index for a cell in the middle', () => {
    expect(getIndexFromXAndY(7, 2, 2)).toBe(16);
  });
});

describe('getXAndYFromIndex', () => {
  test('returns the right X and Y for a 1-value array', () => {
    expect(getXAndYFromIndex(1, 0)).toEqual([0, 0])
  })

  test('returns the right X and Y for a 2x2 matrix', () => {
    expect(getXAndYFromIndex(2, 3)).toEqual([1, 1])
  })

  test('returns the right X and Y for a 4x4 matrix', () => {
    expect(getXAndYFromIndex(4, 15)).toEqual([3, 3])
  })

  test('returns the right X and Y for an index in the middle', () => {
    expect(getXAndYFromIndex(7, 16)).toEqual([2, 2]);
  });
})
