/*
  [ 탭 메뉴 만들기 ]
  1. 각 버튼을 클릭할 때마다 클릭한 탭버튼만 활성화
  2. 이벤트문과 기능 함수를 분리 호출
  3. 이미 활성화 된 버튼 클릭 시 불필요한 함수 호출 방지
    (재이벤트 방지 기능)
*/

// 전역 변수 파트
const frame = document.querySelector('section');
const btns = frame.querySelectorAll('.btn li');
const boxs = frame.querySelectorAll('.panels article');

// 이벤트 파트
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.currentTarget.classList.contains('on')) {
			return;
		}

		console.log(`${idx} 탭 활성화`);

		activation(btns, idx); // 버튼 활성화
		activation(boxs, idx); // 박스 활성화
		// [btns, boxs].forEach((el) => activation(el, idx));
	});
});

// 함수 파트
function activation(array, idx) {
	for (const element of array) element.classList.remove('on'); // 초기화
	array[idx].classList.add('on');
}
