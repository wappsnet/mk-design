export const getRandomWidth = (width?: number | `${number}%`) => {
  const str = (width || 100).toString();
  const size = parseInt(str);
  const max = Math.min(size, 100);
  const min = (30 / 100) * size;

  const result = Math.floor(Math.random() * (max - min) + min);

  if (str.includes('%')) {
    return `${result}%`;
  }

  return result;
};
