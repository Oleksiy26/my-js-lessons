// algorithm of solution:
// 1. iterate numbers from  0 to 1000 or another nnumber
// 2.если остаток от деления i/2 не = 0 то
// 3.console.log("Found");
// 4.если сумму нечетных чисел *5 и она >5000
// console.log("Bigger") if no
// console.log('Smaller or equal');

let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 !== 0) {
    sum += i;
    console.log('Found');
  }
}
if (sum + 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
