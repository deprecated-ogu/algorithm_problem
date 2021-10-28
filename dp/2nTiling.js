// https://programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  let memory = [];
  memory[0] = 1;
  memory[1] = 2;
  for (let i = 2; i < n; i++)
    memory[i] = (memory[i - 1] + memory[i - 2]) % 1000000007;
  return memory[n - 1];
}

var n = 4;
console.log(solution(n));
