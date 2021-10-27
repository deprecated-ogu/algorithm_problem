// https://programmers.co.kr/learn/courses/30/lessons/12978

function makeMap(N, road) {
  const map = new Array(N).fill(false);
  for (let i = 0; i < N; i++) map[i] = new Array(N).fill(null);

  for (let i = 0; i < road.length; i++) {
    const [from, to, value] = road[i];
    if (!map[from - 1][to - 1] || map[from - 1][to - 1] > value) {
      map[from - 1][to - 1] = value;
      map[to - 1][from - 1] = value;
    }
  }
  return map;
}

function bfs(start, visited, map) {
  const queue = [start];
  visited[start] = 0;

  while (queue.length) {
    const cur = queue.pop();

    for (let i = 0; i < map[cur].length; i++) {
      if (i === 0) continue;

      const value = map[cur][i];
      if (value === null || value === false) continue;

      if (!visited[i] || visited[i] > visited[cur] + map[cur][i]) {
        visited[i] = visited[cur] + map[cur][i];
        queue.push(i);
      }
    }
  }
}

function solution(N, road, K) {
  const map = makeMap(N, road);
  const visited = new Array(N).fill(0);

  bfs(0, visited, map);
  return visited.filter((el) => el <= K).length || 1;
}

var N = 5;
var road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
var K = 3;
console.log(solution(N, road, K));
