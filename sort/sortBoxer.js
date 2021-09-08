// https://programmers.co.kr/learn/courses/30/lessons/85002

// win rate > more weight win count > weight > id number
function solution(weights, head2head) {
  let resultArr = [];

  head2head.forEach((el, boxerNum) => {
    const weight = weights[boxerNum];
    let winCount = 0;
    let fightCount = 0;
    let moreWeightWinCount = 0;

    for (let idx = 0; idx < el.length; idx++) {
      if (boxerNum !== idx && el[idx] !== "N") {
        fightCount++;
        if (el[idx] === "W") {
          winCount++;
          if (weight < weights[idx]) moreWeightWinCount++;
        }
      }
    }
    resultArr.push({
      boxerNum: boxerNum + 1,
      winRate: fightCount ? winCount / fightCount : 0,
      moreWeightWinCount,
      weight,
    });
  });

  resultArr.sort((a, b) => {
    if (a.winRate !== b.winRate) return b.winRate - a.winRate;
    if (a.moreWeightWinCount !== b.moreWeightWinCount)
      return b.moreWeightWinCount - a.moreWeightWinCount;
    if (a.weight !== b.weight) return b.weight - a.weight;
    return a.boxerNum - b.boxerNum;
  });

  return resultArr.map((el) => el.boxerNum);
}

var weights = [60, 70, 60];
var head2head = ["NNN", "NNN", "NNN"];
console.log(solution(weights, head2head));
