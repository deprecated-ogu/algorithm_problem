// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  let idToName = {};
  let recordArr = record.map((el) => el.split(" "));
  let resultMsg = [];

  recordArr.forEach((el) => {
    if (el[0] === "Enter" || el[0] === "Change") {
      idToName[el[1]] = el[2];
    }
  });

  recordArr.forEach((el) => {
    if (el[0] === "Enter") {
      resultMsg.push(`${idToName[el[1]]}님이 들어왔습니다.`);
    }
    if (el[0] === "Leave") {
      resultMsg.push(`${idToName[el[1]]}님이 나갔습니다.`);
    }
  });

  return resultMsg;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
