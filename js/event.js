/* [ DOM 요소 이벤트 제어 ] */

const frame = document.querySelector('#wrap');
console.dir(frame); // on으로 시작 -> 이벤트

/* [ 1. 이벤트 연결 방식 - 위험요소: 이벤트가 덮어써짐 ] */
frame.onclick = () => {
	console.log('clicked');
};
frame.onclick = () => {
	console.log('clicked 덮어쓰기');
};

/* [ 2. 이벤트 연결 방식 - 이벤트가 추가됨 (권장) ] */
frame.addEventListener('click', () => {
	console.log('중요한 코드');
});
frame.addEventListener('click', () => {
	console.log('두번째 중요한 코드');
});

// 호출 형태가 아닌 정의 형태로 두번째 인수 전달하기
frame.addEventListener('click', handler);
function handler() {
	console.log('세번째 중요한 코드');
}

// 함수에 인수값을 전달해야 하는 형태로 이벤트 연결 시 선언적 함수로 미리 핸들러 함수 정의
frame.addEventListener('click', () => handler2('두번째 인수의 함수에 인수 전달'));
function handler2(text) {
	console.log(text);
}

/* 
	[ 이벤트 함수 제거하기 ]
	- 선택자에 이벤트 연결되어 있는 함수를 제거 가능
	- 이벤트 제거를 위해서는 선택자에 익명함수가 아닌 선언적 함수가 등록되어 있어야 한다.

	[ 이벤트 함수 제거 사례 ]
	- 보통 window 객체에 여러 이벤트 핸들러 함수를 등록함
	- 특정 페이지에서만 동작해야 하는 핸들러 함수를 다른 페이지에서 동작하지 않게 하기 위함
	- 선택자에 등록되어 있는 이벤트 핸들러 함수를 지울 필요가 있음
*/
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	frame.removeEventListener('click', handler);
});
