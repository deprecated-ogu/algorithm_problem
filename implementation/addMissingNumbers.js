// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, cur) => {
    if (!numbers.includes(cur)) return acc + cur;
    return acc;
  }, 0);
}

var numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));
