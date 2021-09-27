// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let result = 0;

  let filterTree = skill_trees.map((tree) => {
    return tree.split("").filter((el) => skill.includes(el));
  });

  for (let i = 0; i < filterTree.length; i++) {
    let isValid = true;
    for (let j = 0; j < filterTree[i].length; j++) {
      if (skill[j] !== filterTree[i][j]) {
        isValid = false;
        break;
      }
    }
    if (isValid) result++;
  }

  return result;
}

var skill = "CBD";
var skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));
