/* 
  [ DOM에 스타일 적용하기 ]
*/

// 인라인 형태로 강제 스타일 적용
const box = document.querySelector('article');
// box.style.backgroundColor = '#333'; // style 프로퍼티에 접근

/* 
  [ 스크립트로 요소의 색상 가져오기 ]
  js는 css파일에 접근할 수 없기 때문에 style 객체값을 출력하면 값이 비어있다.
  -> css로 적용되어 있는 스타일 값을 가져오기 위해서 이미 화면에 랜더링 된 결과값을 다시 재연산하여 가져와야 한다.
*/

console.log('style 객체 출력: ', box.style.backgroundColor);

// getComputedStyle()
console.log('배경색 출력: ', getComputedStyle(box).backgroundColor);
console.log('넓이값 출력: ', getComputedStyle(box).width);

// DOM 속성명에 해당하는 value 값 반환
const link = document.querySelector('a');
console.log('링크 target 속성: ', link.getAttribute('target'));

// DOM 속성값 변경
link.setAttribute('href', 'https://www.nate.com');
link.setAttribute('target', '_self');

// DOM의 텍스트노드 변경
link.innerText = 'NATE';
