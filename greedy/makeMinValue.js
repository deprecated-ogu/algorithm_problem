// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let result = 0;

  while (A.length) {
    let min = Math.min(...A);
    A.splice(A.indexOf(min), 1);
    let max = Math.max(...B);
    B.splice(B.indexOf(max), 1);
    result += min * max;
  }
  return result;
}

var A = [1, 4, 2];
var B = [5, 4, 4];
console.log(solution(A, B));
