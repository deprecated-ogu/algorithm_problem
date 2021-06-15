// insertionSort

const insertionSort = function (arr, callback = (el) => el) {
  for (let i = 1; i < arr.length; i++)
    for (let j = i - 1; j >= 0; j--)
      if (callback(arr[j]) > callback(arr[j + 1]))
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  return arr;
};

let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]