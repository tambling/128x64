import Matrix from '.';

import { DimensionMismatchError } from './errors';

describe('new Matrix()', () => {
  test('can create a new Matrix', () => {
    const matrix = new Matrix();

    expect(matrix instanceof Matrix)
  });

  test('sets rawData, width, and height', () => {
    const rawData = [true];
    const width = 1;
    const height = 1;

    const matrix = new Matrix(width, height, rawData);

    expect(matrix.rawData).toBe(rawData);
    expect(matrix.width).toBe(1);
    expect(matrix.height).toBe(1);
  });

  test('throws an error if the dimensions are wrong', () => {
    const rawData = [];
    const width = 2;
    const height = 2;

    expect(() => {
      new Matrix(width, height, rawData);
    }).toThrow(new DimensionMismatchError());
  });

});

describe('Matrix.getAt()', () => {
  test('gets the value at a given X and Y', () => {
    const rawData = ['a', 'b', 'c', 'd'];
    const width = 2;
    const height = 2;

    const matrix = new Matrix(width, height, rawData);

    expect(matrix.getAt(1, 1)).toBe('d');
  });
});

describe('Matrix.setAt()', () => {
  test('sets the value at a given X and Y', () => {
    const rawData = ['a', 'b', 'c', 'd'];
    const width = 2;
    const height = 2;

    const matrix = new Matrix(width, height, rawData);

    matrix.setAt(1, 1, 'e');

    expect(matrix.rawData).toEqual(['a', 'b', 'c', 'e'])
  });
});

describe('Matrix.forEach()', () => {
  test('calls the callback with value, X, and Y for each cell', () => {
    const rawData = ['a', 'b', 'c', 'd'];
    const width = 2;
    const height = 2;

    const matrix = new Matrix(width, height, rawData);
    
    const f = jest.fn();

    matrix.forEach(f);

    ([
      [0, 0, 'a'], 
      [1, 0, 'b'], 
      [0, 1, 'c'], 
      [1, 1, 'd']
    ]).forEach(([x, y, value]) => {
      expect(f).toHaveBeenCalledWith(x, y, value);
    });
  })
})


