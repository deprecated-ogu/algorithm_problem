// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  let answer = [];
  numbers.forEach((number) => {
    let str = "0" + number.toString(2);
    if (str[str.length - 1] === "0") answer.push(number + 1);
    else {
      for (let i = str.length; i >= 0; i--) {
        if (str[i] === "0" && str[i + 1] === "1") {
          answer.push(
            parseInt(str.substring(0, i) + "10" + str.substring(i + 2), 2)
          );
          break;
        }
      }
    }
  });
  return answer;
}

var numbers = [2, 7];
console.log(solution(numbers));
