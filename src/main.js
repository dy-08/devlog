'use strict';

// 스크롤하면 헤더 변경(투명 -> 백그라운드+쉐도우)
const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
  const headerHeight = document.querySelector('.header').scrollHeight;

  if (window.scrollY > headerHeight / 2) {
    header.classList.add('header--bg');
  } else {
    header.classList.remove('header--bg');
  }
});

//메뉴 클릭 시 탑으로부터 여유있게 처리함
const sectionIds = ['#home', '#about', '#skills', '#projects', '#contact'];
const sectionsTopValue = sectionIds.map(
  (id) => document.querySelector(id).offsetTop
);
const menuItems = document.querySelector('.header__menu');
let flag;

menuItems.addEventListener('click', (event) => {
  event.preventDefault();

  let current = `#${event.target.dataset.category}`;
  const index = sectionIds.indexOf(`${current}`);
  setFlag(index);
  moveScroll(flag, index);
});

function setFlag(index) {
  return (flag = index >= 3 ? true : false);
}
function moveScroll(flag, index) {
  if (!flag) {
    return window.scrollTo({ top: sectionsTopValue[index] - 100 });
  } else {
    return window.scrollTo({ top: sectionsTopValue[index] });
  }
}

// Arrow up버튼을 아래로 스크롤시 나타나게 처리함
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  const homeHeight = document.querySelector('#home').scrollHeight;

  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
