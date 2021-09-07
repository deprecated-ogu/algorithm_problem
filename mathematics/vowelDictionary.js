// https://programmers.co.kr/learn/courses/30/lessons/84512

const VOWEL = ["A", "E", "I", "O", "U"];
const DIGIT = [781, 156, 31, 6, 1];

function solution(word) {
  let wordArr = word.split("");
  let result = 0;

  wordArr.forEach((letter, idx) => {
    result += VOWEL.indexOf(letter)
      ? VOWEL.indexOf(letter) * DIGIT[idx] + 1
      : 1;
  });

  return result;
}

console.log(solution("EIO"));
