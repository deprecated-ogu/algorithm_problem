// quick sort

function partition(arr, left, right, pivotIndex) {
	pivot = arr[pivotIndex]
	while (left <= right) {
		while (arr[left] < pivot)
			left++
		while (arr[right] > pivot)
			right--
		if (left <= right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++
			right--
		}
	}
	[arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
	return left
}

function quickSort(arr, left, right) {
	if (!left) left = 0
	if (!right) right = arr.length - 1
	pivotIndex = partition(arr, left, right - 1, right);
	if (left < pivotIndex - 1)
		quickSort(arr, left, pivotIndex - 1)
	if (pivotIndex + 1 < right)
		quickSort(arr, pivotIndex + 1, right)
	return arr
}

let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]