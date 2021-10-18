// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  let answer = 1;
  while (answer++) if (n % answer === 1) return answer;
}

var n = 12;
console.log(solution(n));
