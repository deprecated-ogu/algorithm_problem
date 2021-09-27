// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  sizes.forEach((size) => size.sort((a, b) => a - b));
  const width = Math.max(...sizes.map((size) => size[0]));
  const height = Math.max(...sizes.map((size) => size[1]));

  return width * height;
}

var sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));
