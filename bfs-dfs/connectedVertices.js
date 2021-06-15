// 문제
// 방향이 없는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇 개인지 반환하는 함수를 작성하세요.

// 입력
// 인자 1: edges
// 2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열)
// ex) [[0, 1], [1, 2], [3, 4]]
// 출력
// Number 타입을 리턴해야 합니다.
// 연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.

function dfs(adjList, vertex, visited) {
	visited[vertex] = true;
	for (let i = 0; i < adjList[vertex].length; i++)
		if (!visited[adjList[vertex][i]])
			dfs(adjList, adjList[vertex][i], visited);
}

function connectedVertices(edges) {
	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);

	const adjList = {};

	for (let i = 0; i <= maxVertex; i++)
		adjList[i] = [];
	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push(edges[i][1]);
		adjList[edges[i][1]].push(edges[i][0]);
	}
	const visited = {};
	let count = 0;

	for (let vertex = 0; vertex <= maxVertex; vertex++) {
		if (!visited[vertex]) {
			dfs(adjList, vertex, visited);
			count++;
		}
	}
	return count;
}



const result = connectedVertices([
	[0, 1],
	[2, 3],
	[3, 4],
	[3, 5],
]);
console.log(result); // 2