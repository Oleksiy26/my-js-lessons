function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum > 100;
}

checkSum([1, 10, -10, 4]); // ==> 5
checkSum([1]); // ==> 1
checkSum([-8, 8]); // ==> 0
checkSum(10, 12, 14); // ==> null
