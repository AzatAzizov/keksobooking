
const getRandom = (min, max, floating) => {
    const err = 'ERROR';
    const rand = (Math.random() * (max - min) + min).toFixed(floating);
   return min < 0 || max < 0 || max <= min ? err : rand;
};