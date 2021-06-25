const pxToRem = (size: number) => {
  const fontSize = 14;
  const htmlFontSize = 16;
  const coef = fontSize / 14;

  return `${(size / htmlFontSize) * coef}rem`;
};

export default pxToRem;
