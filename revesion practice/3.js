
function calculateMean(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

function calculateMedian(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}

function GetMedianAndMean(arr) {
  return {
    mean: calculateMean(arr),
    median: calculateMedian(arr),
  } 
}

input = [12, 46, 32, 64]
console.log(GetMedianAndMean(input))
