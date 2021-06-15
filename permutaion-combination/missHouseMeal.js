// 문제
// 김코딩은 몇 년의 해외 출장 끝에 본가에 내려왔습니다. 오랜만에 보는 김코딩의 얼굴에 반가웠던 부모님은 상다리가 부러질 정도로 음식을 만들었습니다. 감동의 재회도 잠시, 의자에 앉아 식사를 하려던 김코딩은 무엇부터 먹어야 될지 깊은 생각에 빠졌습니다. 정성스럽게 차려 주신 만큼, 최대한 많은 방법으로 다양하게 먹고 싶었기 때문입니다.

// 밥은 한 가지이며 반찬은 다수일 때, 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수를 배열에 담아 리턴하세요.

// 입력
// 인자 1: sideDishes
// String 타입의 영문으로 된 반찬이 나열되어 있는 배열
// 출력
// Array 타입을 리턴해야 합니다.
// 밥과 함께 먹을 수 있는 반찬의 모든 경우의 수가 담긴 배열

function powerSet(arr, tmp, depth, result) {
	if (depth === arr.length) {
		result.push(tmp);
		return ;
	}

	powerSet(arr, [...tmp, arr[depth]], depth + 1, result);
	powerSet(arr, tmp, depth + 1, result);
}

function missHouseMeal(sideDishes) {
	let result = [];
	powerSet(sideDishes.sort(), [], 0, result);
	return result.sort();
}
let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/