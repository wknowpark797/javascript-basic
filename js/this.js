/* 
  [ this 사용 ]
  자바스크립트에서 this는 window 객체 (최상위 객체)
  -> this 객체를 항상 window 객체를 가리키도록 해주어야 한다.
*/

const list = document.querySelectorAll('ul li');
console.log('최상위 this: ', this);

/* 
  이벤트에 바인딩 되어 있는 function문 안쪽에서 this 객체는 이벤트가 발생한 대상으로 새롭게 객체가 생성된다.
  - function문이 어디에서 호출되는지에 따라 this 값이 window가 아닌 값으로 변경된다.
*/

/* 
  [ 해결방안 ]

  1. bind() 사용
    - 직접 바인딩한 객체로 설정이 가능
    - function문에서는 이벤트문 안쪽의 this값을 고정하기 위해 해당 함수 뒤에 bind() 함수로 원하는 객체값을 고정할 수 있다.
  
  2. 화살표 함수 사용 (권장)
    - 화살표 함수 안쪽에서는 this 객체가 생성되지 않는다.
    - this 객체가 생성되지 않으면 상위 스코프(코드블록)에서 해당 값을 참조한다. (window 객체)
*/

// bind() 사용
list.forEach(function (data, index) {
	console.log('반복문 this: ', this);

	data.addEventListener(
		'click',
		function () {
			console.log('이벤트문 this', this); // li
		}.bind(this)
	);
});

// 화살표 함수 사용
list.forEach((data, index) => {
	data.addEventListener('click', () => {
		console.log('화살표 함수 this: ', this);
	});
});
