function sumOfPositiveNumbers(arr) {
  const positiveNumbers = arr.filter((num) => num > 0);
  if (positiveNumbers.length === 0) {
    return 0;
  }
  return positiveNumbers.reduce((acc, num) => acc + num, 0);
}

input = [1, -4, 12, 0, -3, 29, -150]
console.log(sumOfPositiveNumbers(input))
