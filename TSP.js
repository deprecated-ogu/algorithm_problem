// 문제
// 외판원 문제(travelling salesman problem, 이하 TSP)는 아래와 같이 정의됩니다.

// 여러 도시들의 위치가 주어졌을 때, 모든 도시들을 단 한번씩 방문하는 최단 거리를 구하세요.
// 각 도시의 위치를 나타내는 좌표평면 위의 점들을 입력받아, TSP의 최단 거리를 리턴해야 합니다.

// 입력
// 인자 1: places
// 배열을 요소로 갖는 배열
// places[i]는 number 타입을 요소로 갖는 배열
// places[i].length는 2
// places[i]의 요소는 차례대로 좌표평면 위의 y좌표, x좌표
// 출력
// number 타입을 리턴해야 합니다.


function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.round(dist * 100);
}

const TSP = function (places) {
  let currentMinDist = Number.MAX_VALUE;
  const LENGTH = places.length;
  function traverse(lastVisited, visited, totalDist, visitNum) {
    if (visitNum === LENGTH) {
      if (currentMinDist > totalDist) {
        currentMinDist = totalDist;
      }
      return;
    }

    visited.forEach((value, idx) => {
      if (value === false) {
        const distToNext = calculateDistance(places[lastVisited], places[idx]);
        visited[idx] = true;
        traverse(idx, visited, totalDist + distToNext, visitNum + 1);
        visited[idx] = false;
      }
    });
  }
  
  const visited = Array(LENGTH).fill(false);
  places.forEach((_, idx) => {
    visited[idx] = true;
    traverse(idx, visited, 0, 1);
    visited[idx] = false;
  });

  return currentMinDist;
};