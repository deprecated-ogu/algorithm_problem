// https://programmers.co.kr/learn/courses/30/lessons/68936

function compressArr(array, size, countArray, start) {
  const first = array[start[0]][start[1]];
  if (size === 1) {
    first === 0 ? (countArray[0] += 1) : (countArray[1] += 1);
    return;
  }

  const half = size / 2;
  let keep = true;

  for (let i = start[0]; i < start[0] + size; i++) {
    for (let j = start[1]; j < start[1] + size; j++) {
      if (first !== array[i][j]) {
        keep = false;
        break;
      }
    }
    if (!keep) break;
  }

  if (keep) {
    first === 0 ? countArray[0]++ : countArray[1]++;
    return;
  }

  compressArr(array, half, countArray, start);
  compressArr(array, half, countArray, [start[0], start[1] + half]);
  compressArr(array, half, countArray, [start[0] + half, start[1]]);
  compressArr(array, half, countArray, [start[0] + half, start[1] + half]);
  return;
}

function solution(arr) {
  const countArray = [0, 0];

  compressArr(arr, arr.length, countArray, [0, 0]);
  return countArray;
}

var arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];
console.log(solution(arr));
