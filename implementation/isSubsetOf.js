const isSubsetOf = function (base, sample) {
	base = base.sort((a, b) => a - b);
	sample = sample.sort((a, b) => a - b);
	let index = 0;
	let find;
	for (let i = 0; i < sample.length; i++) {
			find = false;
			while (base[index]) {
					if (base[index] === sample[i]) {
							find = true;
							break;
					}
					index++;
			}
			if (!find)
					return false;
	}
	return true;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false