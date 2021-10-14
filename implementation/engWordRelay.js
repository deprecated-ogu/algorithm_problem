// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let answer = 0;
  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      words.indexOf(words[i]) !== i
    ) {
      answer = i + 1;
      break;
    }
  }
  return answer ? [answer % n ? answer % n : n, Math.ceil(answer / n)] : [0, 0];
}

var n = 3;
var words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

console.log(solution(n, words));
