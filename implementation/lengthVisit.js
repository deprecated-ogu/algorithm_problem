// https://programmers.co.kr/learn/courses/30/lessons/49994

function isInBound(x, y) {
  return x > 5 || x < -5 || y > 5 || y < -5;
}

function solution(dirs) {
  let move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };
  let isVisit = new Set();
  let [prevX, prevY] = [0, 0];
  let dirsArr = dirs.split("");
  dirsArr.forEach((dir) => {
    let curX = prevX + move[dir][0];
    let curY = prevY + move[dir][1];
    if (!isInBound(curX, curY)) {
      isVisit.add(`${prevX},${prevY},${curX},${curY}`);
      isVisit.add(`${curX},${curY},${prevX},${prevY}`);
      [prevX, prevY] = [curX, curY];
    }
  });
  return isVisit.size / 2;
}

var dirs = "ULURRDLLU";
console.log(solution(dirs));
