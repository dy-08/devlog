'use strict';

// Arrow up버튼을 아래로 스크롤시 나타나게 처리함
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    const homeHeight = document.querySelector('#home').scrollHeight;

    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    }else{
        arrowUp.style.opacity = 0;
    }
});

