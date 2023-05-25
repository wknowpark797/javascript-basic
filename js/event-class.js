const box = document.querySelector('article');
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnToggle = document.querySelector('.toggle');

// DOM 요소에 클래스 추가
btnStart.addEventListener('click', (e) => {
	e.preventDefault();
	box.classList.add('on');
});

// DOM 요소에 클래스 제거
btnReset.addEventListener('click', (e) => {
	e.preventDefault();
	box.classList.remove('on');
});

// DOM 요소에 Toggle 적용
btnToggle.addEventListener('click', (e) => {
	e.preventDefault();
	// box.classList.toggle('on');

	// 버튼 활성화 적용
	const isOn = btnToggle.classList.contains('on');
	if (isOn) {
		box.classList.remove('on');
		btnToggle.classList.remove('on');
	} else {
		box.classList.add('on');
		btnToggle.classList.add('on');
	}
});
