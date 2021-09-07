// https://programmers.co.kr/learn/courses/30/lessons/83201

function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80 && score < 90) return "B";
  else if (score >= 70 && score < 80) return "C";
  else if (score >= 50 && score < 70) return "D";
  else return "F";
}

function solution(scores) {
  let answer = "";

  for (let j = 0; j < scores.length; j++) {
    const myScore = scores[j][j];
    let studentNum = scores.length;
    let min = 101;
    let max = -1;
    let sumScore = 0;
    let isUnique = true;

    for (let i = 0; i < scores.length; i++) {
      const score = scores[i][j];

      if (i != j && myScore == score) isUnique = false;

      min = Math.min(min, score);
      max = Math.max(max, score);
      sumScore += score;
    }

    if (isUnique && (min == myScore || max == myScore)) {
      studentNum--;
      sumScore -= myScore;
    }

    answer += getGrade(sumScore / studentNum);
  }

  return answer;
}
