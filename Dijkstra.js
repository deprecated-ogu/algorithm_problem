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

function Dijkstra(num, edges, start, end) {}
