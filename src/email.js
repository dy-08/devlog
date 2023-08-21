'use strict';

// 버튼 클릭 시 폼 보여짐
const btnEmail = document.querySelector('.contact__email');
const formEmail = document.querySelector('#email');

btnEmail.addEventListener('click', () => {
  if (formEmail.style.display == 'none') {
    formEmail.style.display = 'block';
  } else {
    formEmail.style.display = 'none';
  }
});

// exit 클릭 시 나가짐
const btnExit = document.querySelector('.exit');

btnExit.addEventListener('click', () => {
  event.preventDefault();

  formEmail.style.display = 'none';
});
