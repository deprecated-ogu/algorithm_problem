// https://programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
  let answer = 0;
  let idx = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[idx] < B[i]) {
      answer++;
      idx++;
    }
  }
  return answer;
}

var A = [5, 1, 3, 7];
var B = [2, 2, 6, 8];
console.log(solution(A, B));
