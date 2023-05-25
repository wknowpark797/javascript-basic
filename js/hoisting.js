/*
  [ 호이스팅 Hoisting ]
  - var 변수 사용 시 호이스팅 발생
  - 코드블록 안쪽에서 선언된 변수(지역변수)는 해당 코드블록 밖에서는 호출이 불가하지만 코드블록 안쪽의 변수값이 최상위 요소에서 읽히는 문제
*/

/* 
  실제 코드가 반복을 돌 때마다 i 값이 각각 0, 1, 2까지 반복을 돌고 값이 사라져야 하지만 var로 변수를 선언했기 때문에 지역변수 i 값이 전역화되어 반복이 끝나도 전역에 var i = 3; 값이 등록된다.
*/

var boxs = document.querySelectorAll('#wrap p');

// 호이스팅 발생 코드
for (var i = 0; i < boxs.length; i++) {
	boxs[i].onclick = function () {
		console.log('호이스팅 발생: ', i);
	};
}

/* 
  [ 해결 방안 ]
  - 지역 변수로 유지되어야 하는 i 값의 호이스팅을 막기 위해 즉시실행 함수로 코드를 캡슐화 할 수 있다.
  - let, const 사용하기
*/

for (let i = 0; i < boxs.length; i++) {
	boxs[i].onclick = function () {
		console.log('let 사용: ', i);
	};
}
