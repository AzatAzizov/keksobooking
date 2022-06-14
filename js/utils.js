export const getRandomAvatarId = () => {
  const randomInt = getRandomInt(1, 10);
  return randomInt === 10 ? "10" : `0${randomInt}`;
};

export const getRandomDouble = (min, max, floating) => {
  const err = "ERROR";
  const rand = (Math.random() * (max - min) + min).toFixed(floating);
  return min < 0 || max < 0 || max <= min ? err : rand;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomElementFromArray = (array) =>
  array[getRandomInt(0, array.length - 1)];
