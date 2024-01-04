'use strict';

// 버튼 클릭 시 폼 보여짐
// const btnEmail = document.querySelector('.contact__email');
const btnEmail = document.querySelector('#contact__email');
const formEmail = document.querySelector('#email');
const body = document.querySelector('body');

btnEmail.addEventListener('click', () => {
  if (formEmail.style.display == 'none') {
    formEmail.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    formEmail.style.display = 'none';
    body.style.overflow = 'scroll';
  }
});

// exit 클릭 시 나가짐
const btnExit = document.querySelector('.exit');

btnExit.addEventListener('click', (event) => {
  event.preventDefault();

  formEmail.style.display = 'none';
  body.style.overflow = 'scroll';
  from.value = '';
  title.value = '';
  contents.value = '';
  attachments.name = '';
  attachments.dataUri = '';
  uploadFile.value = '';
  checkMark.style.display = 'none';
  exclamationMark.style.display = 'none';
  guideText.innerHTML = '';
});

// 파일 정보 입력받는 로직
let uploadFile = document.querySelector('#fileupload');
let attachments = {
  name: '',
  dataUri: '',
};

uploadFile.addEventListener('change', (event) => {
  let file = event.srcElement.files[0];
  let reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = function () {
    let dataUri = 'data:' + file.type + ';base64,' + btoa(reader.result);
    return (attachments.name = file.name), (attachments.dataUri = dataUri);
  };
});

// 이메일 전송 로직
const btnSend = document.querySelector('#e__send');
let from = document.querySelector('#e__from');
let title = document.querySelector('#e__title');
let contents = document.querySelector('#contents');
let guideText = document.querySelector('#guideText');
let regExp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

btnSend.addEventListener('click', (event) => {
  event.preventDefault();

  // 함수로 따로 빼고싶은데 어떻게 리펙토링을 해야할까?
  let isEmail = from.value.match(regExp) ? true : false;
  if (
    isEmail === false ||
    from.value.trim() === '' ||
    title.value.trim() === '' ||
    contents.value.trim() == ''
  ) {
    return;
  }

  let person = from.value;

  Email.send({
    SecureToken: '95b5c7c8-2c42-4590-af07-6d311167d86e',
    To: 'dy-08@naver.com',
    From: 'dy-08@naver.com',
    Subject: `${title.value} From: ${from.value}`,
    Body: contents.value,
    Attachments: [
      {
        name: attachments.name,
        data: attachments.dataUri,
      },
    ],
  }).then((message) => {
    if (message === 'OK') {
      alert(
        `${person}님 연락주셔서 감사드립니다.\n1-2일 이내로 확인하고 회신드리겠습니다.\n감사합니다.\n권영호드림`
      );
    } else {
      console.error(message);
      alert(
        `${person}님 죄송합니다.\n현재 서비스가 불안정하여 메일 전송에 실패하였습니다.\ndy-08@naver.com으로 연락주시면 1-2일 이내로 확인하고 회신드리겠습니다.\n감사합니다.\n권영호드림`
      );
    }
  });

  from.value = '';
  title.value = '';
  contents.value = '';
  attachments.name = '';
  attachments.dataUri = '';
  uploadFile.value = '';
});

// 이메일 체크해주는 함수
const exclamationMark = document.querySelector('.fa-circle-exclamation');
const checkMark = document.querySelector('.fa-circle-check');
function validateEmail() {
  if (!from.value.match(regExp)) {
    guideText.innerHTML = 'Check your email';
    checkMark.style.display = 'none';
    exclamationMark.style.display = 'inline-block';
    return false;
  }
  guideText.innerHTML = '';
  exclamationMark.style.display = 'none';
  checkMark.style.display = 'inline-block';
  return true;
}
