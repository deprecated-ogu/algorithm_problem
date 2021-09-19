// https://programmers.co.kr/learn/courses/30/lessons/12911

function checkBinaryCount(n, binaryCount) {
  let binary = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  return binary === binaryCount;
}

function solution(n) {
  let binaryCount = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  while (n++) {
    if (checkBinaryCount(n, binaryCount)) {
      return n;
    }
  }
}

console.log(solution(78));
