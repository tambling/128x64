export const getIndexFromXAndY = (width, x, y) => (width * y) + x;

export const getXAndYFromIndex = (width, index) => {
  const x = index % width
  const y = Math.floor(index / width);

  return [x, y];
};
