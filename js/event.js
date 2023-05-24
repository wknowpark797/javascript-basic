/* 
  [ DOM 요소 이벤트 제어하기 ]
  - 사용자 이벤트
  - 시스템 이벤트
*/

const frame = document.querySelector('#wrap');

// on 으로 시작하는 단어는 모두 이벤트
console.dir(frame);

// [ 위험한 이벤트 연결 방식 (덮어쓰기 위험) ]
// frame.onclick = (event) => {
// 	console.log('clicked');
// 	console.log(event.clientX);
// };

// [ 이벤트 덮어쓰기가 아닌 이벤트 추가 방식 ]
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
