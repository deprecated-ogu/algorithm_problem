// https://programmers.co.kr/learn/courses/30/lessons/12938

function solution(n, s) {
  if (n > s) return [-1];
  const answer = new Array(n).fill(parseInt(s / n));
  for (let i = n - 1; i > n - 1 - (s % n); i--) answer[i]++;
  return answer;
}

var n = 2;
var s = 9;
console.log(solution(n, s));
