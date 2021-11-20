const n = 15;
let sum = 0;
for (let i = 1; i <= 15; i += 1) {
  if (sum === 0) {
    sum = String(i);
  } else {
    sum += String(i);
  }
}
console.log(sum);
