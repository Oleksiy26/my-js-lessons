const n = 10;
const m = 1;
let result = 1;

for (let i = m; i <= n; i += 1) {
  if (i % 2 !== 0) {
    result *= i;
  }
}

console.log(result);
