// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  return files.sort((a, b) => {
    const headerA = a.match(/^\D+/)[0].toLowerCase();
    const headerB = b.match(/^\D+/)[0].toLowerCase();
    if (headerA < headerB) return -1;
    if (headerA > headerB) return 1;
    return (
      a.match(/\d+/)[0].replace(/^0+/, "") -
      b.match(/\d+/)[0].replace(/^0+/, "")
    );
  });
}

var files = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];
console.log(solution(files));
