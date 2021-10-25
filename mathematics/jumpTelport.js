// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      answer++;
    }
  }
  return answer;
}

var n = 5;
console.log(solution(n));
