// bubblesort

const bubbleSort = function (arr) {
	let isSwapped;
	for (let i = arr.length - 1; i > 0; i--) {
			isSwapped = false;
			for (let j = 0; j < i; j++) {
					if (arr[j] > arr[j + 1]) {
							[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
							isSwapped = true;
					}
			}
			if (!isSwapped)
					return arr;
	}
	return arr;
};

let output = bubbleSort([2, 1, 3]);
console.log(output); // --> [1, 2, 3]