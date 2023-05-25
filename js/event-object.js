/* 
  [ 이벤트 객체 ]
  - 클릭한 요소의 정보 값
  - e.preventDefault(); 브라우저가 적용하는 기본 동작을 방지

  반복 이벤트 연결
  - 순서값이 필요할 경우 forEach 추천
  - 순서값이 필요 없다면 for of 추천
*/

const btns = document.querySelectorAll('ul li');

// forEach
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		console.log('for each - ', btn, idx);
	});
});

// for of
for (const element of btns) {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		console.log('for of - ', e.currentTarget);
	});
}
