const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const emailWrapper = document.querySelector('.input-wrapper__user-email');
const inputEmail = emailWrapper.querySelector('#user-email');

const nameWrapper = document.querySelector('.input-wrapper__user-name');
const inputName = nameWrapper.querySelector('#user-name');

const phoneWrapper = document.querySelector('.input-wrapper__user-phone');
const inputPhone = phoneWrapper.querySelector('#user-phone');

const messageWrapper = document.querySelector('.input-wrapper__user-message');
const inputMessage = messageWrapper.querySelector('#user-message');

const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,5}$/i;
const errorMessages = [];

const createErrorMessage = (wrapper, text) => {
  const message = document.createElement('p');
  errorMessages.push(message);
  message.textContent = text;
  message.style.color = '#f00';
  wrapper.append(message);
}

const removeErrorMessages = () => {
  errorMessages.forEach(mes => mes.remove());
  inputEmail.style.border = '';
  inputName.style.border = '';
  inputPhone.style.border = '';
  inputMessage.style.border = '';
}

const isValidMail = () => {
  const valid = reg.test(inputEmail.value);
  if (!valid) {
    createErrorMessage(emailWrapper, 'Некорректный email');
    inputEmail.style.border = '2px solid #f00';
  }
  return valid;
}

const isValidName = () => {
  if(!inputName.value) {
    createErrorMessage(nameWrapper, 'Введите имя');
    inputName.style.border = '2px solid #f00';
  }
}

const isValidPhone = () => {
  let valid = false;
  try {
    const checkPhone = phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(inputPhone.value));
    console.log(checkPhone);
    valid = checkPhone;
  }
  catch(e) {

  }  
  if (!valid) {
    createErrorMessage(phoneWrapper, 'Некорректный номер');
    inputPhone.style.border = '2px solid #f00';
  }
  return valid;
}

const isValidMessage = () => {
  if(!inputMessage.value) {
    createErrorMessage(messageWrapper, 'Напишите сообщение');
    inputMessage.style.border = '2px solid #f00';
  }
}

export const isValidForm = () => {
  removeErrorMessages();
  isValidMail();
  isValidName();
  isValidPhone();
  isValidMessage();
}


