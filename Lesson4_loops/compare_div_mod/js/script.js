//  algorithm of solution
// 1.iterate numbers from  0 to 1000
// 2.sum all numbers
// 3.divide by 1234
// 4.select whole and fractional parts
// 5. compare this parts
// if div>mod----->true else false

// console.log(boolean);

let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  sum += i;
  const div = Math.trunc(sum / 1234);
  const mod = sum % 1234;
  const compare = div > mod;
  console.log(compare);
}
