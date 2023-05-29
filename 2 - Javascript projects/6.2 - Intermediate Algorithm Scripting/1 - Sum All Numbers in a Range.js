function sumAll(arr) {
  let copiedArr = arr.slice().sort((a, b) => a - b);
  
  let minNumber = copiedArr[0];
  let maxNumber = copiedArr[1];

  let result = 0;
  let newArr = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    newArr.push(i);
  }

  newArr.map(element => {result += element})

  return result;
}

console.log(sumAll([4, 1]));