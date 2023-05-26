/*
  [ DOM 탐색하기 ]
*/

const section = document.querySelector('section');
console.log('section: ', section);

const articles = section.querySelectorAll('article');
console.log('articles: ', articles);

const btn = document.querySelector('.btn');
console.log('btn: ', btn);

// 부모요소를 기준으로 직계 자식요소를 배열로 반환 - 자식요소가 하나만 있어도 배열로 반환
const childEl = section.children;
console.log('section children: ', childEl);

// 자식요소를 기준으로 직계 부모요소를 반환 - 단일 요소 반환
const parentEl = btn.parentElement;
console.log('btn parent: ', parentEl);

// 이전 형제요소 반환
const prevEl = btn.previousElementSibling;
console.log('btn prev: ', prevEl);

// 다음 형제요소 반환
const nextEl = btn.nextElementSibling;
console.log('btn next: ', nextEl);

// 조상요소 반환 (직계 조상만 가능)
const grandEl = btn.closest('body');
console.log('btn 최상위: ', grandEl);

// 다른요소의 부모 반환
const otherParentEl = btn.closest('ul').previousElementSibling;
console.log('btn other parent: ', otherParentEl);

// Mission
// .btn 요소를 기준으로 div 요소를 탐색구문으로 반환
const mission = btn.closest('main').querySelector('div');
console.log('mission: ', mission);

/*

  [ 유사배열 ]

  1. HTMLCollection
    - document.getElementById('아이디 선택자');
    - document.getElementsByClassName('클래스 선택자');
    - 부모요소.children
    - forEach 반복문의 사용 불가능
      -> 순수배열로 변환 후 활용 가능

      ex) 유사배열을 강제로 순수배열로 변환하기
      Array.from(유사배열)
      const childEl = Array.from(ul.children);
      childEl.forEach(data => console.log(data));

    - Live DOM (동적인 돔)
      변경점이 실시간으로 반영되어 라이브로 확인이 가능

  2. NodeList
    - document.querySelector('선택자');
    - document.querySelectorAll('선택자');
    - forEach 반복문의 사용 가능
    - Static DOM (정적인 돔)
      라이브로 확인이 불가능

*/
