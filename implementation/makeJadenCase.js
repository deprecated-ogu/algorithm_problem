// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word
    )
    .join(" ");
}

console.log(solution("3people unFollowed  m"));
