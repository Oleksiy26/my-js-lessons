function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    let flag = 1;
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        flag = 0;
      }
    }
    if (flag === 1) {
      console.log(i);
    }
  }
}
