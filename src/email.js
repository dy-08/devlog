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

// smtpJs API
const btnSend = document.querySelector('#e__send');
let from = document.querySelector('#e__from');
let title = document.querySelector('#e__title');
let contents = document.querySelector('#contents');

btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Clicked!!');

  Email.send({
    SecureToken: '95b5c7c8-2c42-4590-af07-6d311167d86e',
    To: 'dy-08@naver.com',
    From: from.value,
    Subject: title.value,
    Body: contents.value,
  }).then((message) => alert(message));
});
