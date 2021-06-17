// 문제
// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 -100,000 이상 100,000 이하의 정수
// arr.length는 100,000 이하
// 출력
// number 타입을 요소로 갖는 배열을 리턴해야 합니다.
// 주의사항
// 힙 정렬을 구현해야 합니다.
// arr.sort 사용은 금지됩니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 최소 힙(min heap)을 구현해야 합니다.
// 최소 힙 구현을 위해 선언된 함수들(getParentIdx, insert, removeRoot)을 전부 완성해야 합니다.
// swap, getParentIdx, insert, removeRoot를 전부 사용해야 합니다.
// swap, binaryHeap을 수정하지 않아야 합니다.
// 테스트 케이스에서 힙 함수들을 정확히 구현했는지 함께 테스트합니다.
// removeRoot의 시간 복잡도는 O(logN)입니다.

function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
	return Math.ceil(idx / 2) - 1;
}

function insert(heap, item) {
	let idx = heap.length;
	let parentIndex = getParentIdx(idx);

	heap.push(item);
	while (parentIndex !== -1 && heap[idx] > heap[parentIndex]) {
		swap(idx, parentIndex, heap);
		idx = parentIndex;
		parentIndex = getParentIdx(idx);
	}
	
	return heap;
}

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

let output = binaryHeap([5, 4, 3, 2, 1]);
console.log(output); // --> [5, 4, 3, 2, 1]

output = binaryHeap([3, 1, 21]);
console.log(output); // --> [21, 1, 3]

output = binaryHeap([4, 10, 3, 5, 1]);
console.log(output); // --> [10, 5, 3, 4, 1]