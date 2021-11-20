function increaser(a, index) {
  let increased = a;
  if (a > index) {
    increased += index;
  }
  return increased;
}
const rez = increaser(3, 4);
console.log(rez);
