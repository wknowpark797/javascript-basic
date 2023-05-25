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
