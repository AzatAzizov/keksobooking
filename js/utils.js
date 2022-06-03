export const getRandomDouble = (min, max, toFixedValue) => {
  if (min > max) {
    throw new Error("Minimum value should be smaller than maximum value.");
  }
  var range = max - min;
  return (min + range * Math.random()).toFixed(toFixedValue > 0 ? toFixedValue : 0);
};
