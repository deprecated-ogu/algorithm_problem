// https://programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const arr = [];

  while (left <= right) {
    arr.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }
  return arr;
}

var n = 3;
var left = 2;
var right = 5;

console.log(solution(n, left, right));
