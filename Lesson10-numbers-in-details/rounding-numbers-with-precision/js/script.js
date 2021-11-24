const num = 1.63773784;

const superRound = (num, precision) => {
  const precisionTransform = 10 ** precision;
  const arr = [
    Math.floor(num * precisionTransform) / precisionTransform,
    Math.trunc(num * precisionTransform) / precisionTransform,
    Math.ceil(num * precisionTransform) / precisionTransform,
    Math.round(num * precisionTransform) / precisionTransform,
    +num.toFixed(precision),
  ];
  return arr;
};

console.log(superRound(11.12556, 2));
