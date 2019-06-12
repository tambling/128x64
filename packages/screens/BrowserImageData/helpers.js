export const pixelOff = (imageData, pixelIndex) => {
  const basePixel = pixelIndex * 4;

  imageData.data[basePixel] = 0;
  imageData.data[basePixel + 1] = 0;
  imageData.data[basePixel + 2] = 0;
  imageData.data[basePixel + 3] = 255;
}

export const pixelOn = (imageData, pixelIndex) => {
  const basePixel = pixelIndex * 4;

  imageData.data[basePixel] = 255;
  imageData.data[basePixel + 1] = 255;
  imageData.data[basePixel + 2] = 255;
  imageData.data[basePixel + 3] = 255;
}
