// https://programmers.co.kr/learn/courses/30/lessons/84325

function solution(table, languages, preference) {
  table.sort();
  let tableArr = new Array();
  let scoreArr = new Array();
  for (let i = 0; i < table.length; i++) tableArr.push(table[i].split(" "));

  for (let i = 0; i < tableArr.length; i++) {
    let totalScore = 0;
    for (let j = 1; j <= tableArr[i].length; j++) {
      let score = preference[languages.indexOf(tableArr[i][j])];
      if (score) {
        totalScore += (6 - j) * score;
      }
    }
    scoreArr.push(totalScore);
  }
  return tableArr[scoreArr.indexOf(Math.max(...scoreArr))][0];
}

console.log(
  solution(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
  )
);
