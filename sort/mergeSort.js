// merge sort

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0])
      result.push(left.shift())
    else
      result.push(right.shift())
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr.length / 2
  let left = arr.slice(0, pivot)
  let right = arr.slice(pivot, arr.length)
  return merge(mergeSort(left), mergeSort(right))
}

let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]