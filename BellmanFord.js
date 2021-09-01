// 문제
// 방향성 그래프의 한 정점(vertex)에서 다른 모든 정점까지의 최단 거리를 리턴해야 합니다.

// 입력
// 인자 1: num
// number 타입의 자연수
// 그래프에 존재하는 정점의 개수
// 정점은 1부터 num까지 존재
// 인자 2: edges
// 배열(간선에 대한 정보)을 요소로 갖는 배열
// edges[i]는 number 타입을 요소로 갖는 배열
// edges[i].length는 3
// edges[i]의 요소는 차례대로 정점, 정점, 거리
// edges[i][2]은 100 이하의 정수
// [1, 2, 3]은 1번 정점에서 2번 정점으로 가는 방향의 거리가 3임을 의미함
// 인자 3: start
// number 타입의 출발 정점
// 출력
// 배열을 리턴해야 합니다.

// 그래프 구현이 필요없는 알고리즘: O(V * E)
// V는 정점의 개수, E는 간선의 개수

function BellmanFord(num, edges, start) {
  const INF = Number.MAX_SAFE_INTEGER;
  const dist = Array(num + 1).fill(INF);
  dist[start] = 0;

  for (let v = 1; v <= num - 1; v++) {
    edges.forEach((e) => {
      const [src, dst, weight] = e;
      if (dist[src] !== INF && dist[src] + weight < dist[dst]) {
        dist[dst] = dist[src] + weight;
      }
    });
  }

  const hasNegCycle = edges.some((el) => {
    const [src, dst, weight] = el;
    if (dist[src] !== INF && dist[src] + weight < dist[dst]) {
      return true;
    }
  });

  return hasNegCycle ? [] : dist.slice(1);
}

let num = 5;
let edges = [
  [1, 2, -1],
  [1, 3, 4],
  [2, 3, 3],
  [2, 4, 2],
  [2, 5, 2],
  [4, 2, 1],
  [5, 4, -3],
];
let start = 1;
let output = BellmanFord(num, edges, start);
console.log(output); // --> [0, -1, 2, -2, 1]

num = 5;
edges = [
  [1, 2, 2],
  [2, 3, 3],
  [2, 5, 1],
  [3, 4, -4],
  [4, 2, -1],
];
start = 1;
output = BellmanFord(num, edges, start);
console.log(output); // --> []
