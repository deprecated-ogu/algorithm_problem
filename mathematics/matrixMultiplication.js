function getMultipleMatrix(arr1, arr2, i, j) {
  let result = 0;
  for (let x = 0; x < arr1[i].length; x++) {
    result += arr1[i][x] * arr2[x][j];
  }
  return result;
}

function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      temp.push(getMultipleMatrix(arr1, arr2, i, j));
    }
    result.push(temp);
  }
  return result;
}

var arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
var arr2 = [
  [3, 3],
  [3, 3],
];

console.log(solution(arr1, arr2));
