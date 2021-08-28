function createGraphByList(num, edges) {
  const _edges = {};
  for (let i = 1; i <= num; i++) _edges[i] = [];
  edges.forEach(([src, dst, weight]) => {
    _edges[src].push({ node: dst, weight: weight });
    _edges[dst].push({ node: src, weight: weight });
  });
  return _edges;
}

function createGraphByMatrix(num, edges) {
  const matrix = [];

  const INF = 101;
  for (let row = 0; row <= num; row++) {
    matrix.push(Array(num + 1).fill(INF));
  }

  edges.forEach(([src, dst, weight]) => {
    matrix[src][dst] = matrix[dst][src] = weight;
  });
  return matrix;
}

function getPath(before, start, end) {
  let vertex = before[end];
  const path = [end, vertex];
  while (vertex !== start) {
    vertex = before[vertex];
    path.push(vertex);
  }
  return path.reverse();
}

function getNextNearestIdx(dist, visited, num) {
  let min = Number.MAX_SAFE_INTEGER;
  let target;
  for (let i = 1; i <= num; i++) {
    if (dist[i] < min && visited[i] === false) {
      min = dist[i];
      target = i;
    }
  }
  return target;
}

function Dijkstra(num, edges, start, end) {
  const matrix = createGraphByMatrix(num, edges);
  const distance = matrix[start].slice();
  const visited = Array(num + 1).fill(false);

  visited[start] = true;

  const before = Array(num + 1).fill(-1);

  edges.forEach(([src, dst]) => {
    if (src === start) before[dst] = src;
    if (dst === start) before[src] = dst;
  });

  for (let round = 0; round < num - 2; round++) {
    const nearest = getNextNearestIdx(distance, visited, num);
    visited[nearest] = true;
    visited.forEach((calculated, v) => {
      if (calculated === false) {
        if (distance[nearest] + matrix[nearest][v] < distance[v]) {
          distance[v] = distance[nearest] + matrix[nearest][v];
          before[v] = nearest;
        }
      }
    });
  }

  getPath(before, start, end);

  return distance[end];
}

let num = 4;
let edges = [
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 3],
  [2, 4, 1],
  [3, 4, 5],
];
let start = 1;
let end = 4;
let output = Dijkstra(num, edges, start, end);
console.log(output); // --> 6 (1 - 3 - 2 - 4)

// num = 7;
// edges = [
//   [1, 3, 100],
//   [1, 2, 3],
//   [1, 4, 4],
//   [4, 3, 3],
//   [4, 5, 8],
//   [5, 6, 10],
//   [2, 7, 9],
//   [5, 7, 50],
// ];
// start = 1;
// end = 7;
// output = Dijkstra(num, edges, start, end);
// console.log(output); // --> 12 (1 - 2 - 7)
