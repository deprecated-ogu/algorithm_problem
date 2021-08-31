// 문제
// 방향성 그래프의 임의의 두 정점(vertex)간 최단 거리를 리턴해야 합니다.

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
// edges[i][2]은 100 이하의 양의 정수
// [1, 2, 3]은 1번 정점에서 2번 정점으로 가는 방향의 거리가 3임을 의미함
// 출력
// 배열을 리턴해야 합니다.

const INF = 101;

function createGraphByMatrix(num, edges) {
  const matrix = [];
  for (let i = 0; i <= num; i++) {
    matrix.push(Array(num + 1).fill(INF));
    matrix[i][i] = 0;
  }
  edges.forEach(([src, dst, weight]) => {
    matrix[src][dst] = weight;
  });
  return matrix;
}

function FloydWarshall(num, edges) {
  const dist = createGraphByMatrix(num, edges);
  for (let stopover = 1; stopover <= num; stopover++) {
    for (let src = 1; src <= num; src++) {
      for (let dst = 1; dst <= num; dst++) {
        if (dist[src][stopover] + dist[stopover][dst] < dist[src][dst]) {
          dist[src][dst] = dist[src][stopover] + dist[stopover][dst];
        }
      }
    }
  }

  const nulled = dist.map((row) =>
    row.map((col) => {
      if (col === INF) return null;
      else return col;
    })
  );
  return nulled.slice(1).map((row) => row.slice(1));
}
