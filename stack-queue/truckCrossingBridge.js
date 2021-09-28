// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let second = 0;

  while (bridge.length) {
    bridge.shift();
    second++;

    if (truck_weights.length) {
      let curWeight = bridge.reduce((sum, curValue) => {
        return sum + curValue;
      }, 0);

      if (curWeight + truck_weights[0] <= weight)
        bridge.push(truck_weights.shift());
      else bridge.push(0);
    }
  }

  return second;
}

var bridge_length = 2;
var weight = 10;
var truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));
