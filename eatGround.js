// https://programmers.co.kr/learn/courses/30/lessons/12913

function getMax(arr, prevIdx) {
  let max = 0;
  arr.forEach((val, idx) => {
    if (prevIdx !== idx && val > max) {
      max = Math.max(max, val);
    }
  });
  console.log(arr.indexOf(max));
  return [max, arr.indexOf(max)];
}

function solution(land) {
  let result = 0;
  let prevIdx = -1;
  let max;

  land.forEach((arr, row) => {
    [max, prevIdx] = getMax(arr, prevIdx);
    result += max;
  });
  return result;
}

var land = [
  [1, 2, 3, 5],
  [5, 6, 7, 100],
  [4, 3, 2, 1],
];
console.log(solution(land));

// 그리디하게 풀면 안됨 ㅎ
