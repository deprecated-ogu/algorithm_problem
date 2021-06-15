// radix sort

function sortArr (arr, div) {
	let counter = [];
	for (let i = 0; i < 10; i++) counter.push([]);
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		let bucket = (parseInt(arr[i] / div) % 10);
		counter[bucket].push(arr[i]);
	}

	for (let i = 0; i < counter.length; i++)
		while (counter[i].length) result.push(counter[i].shift());

	return result;
}

function radixSort(arr) {
	let negative = [];
	let positive = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) positive.push(arr[i]);
		else negative.push(arr[i]);
	}

	let maxNum = Math.max.apply(null, positive);
	let div = 1;
	while (parseInt(maxNum / div)) {
		positive = sortArr(positive, div);
		div *= 10;
	}

	negative = negative.map(el => -el);
	maxNum = Math.max.apply(null, negative);
	div = 1;
	while (parseInt(maxNum / div)) {
		negative = sortArr(negative, div);;
		div *= 10;
	}
	negative = negative.map(el => -el);
	negative.reverse();

	return negative.concat(positive);
}


let output = radixSort([20, -10, -11, 2, 29]);
console.log(output); // -->  [-11, -10, 2, 20, 29]