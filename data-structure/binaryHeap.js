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