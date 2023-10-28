import { isValidForm } from './js/validate';
import { modalOpen} from './js/modal';
import './scss/style.scss';

const baseUrl = 'http://localhost:9090/api';
const REQUEST_STATUS_OK = 200;
const REQUEST_STATUS_BAD = 400;
const form = document.querySelector('.form');
const fields = form.querySelectorAll('input');
const textarea = form.querySelector('textarea');
const successMessage = document.querySelector('.message--success');
const errorMessage = document.querySelector('.message--error');
const modalButton = document.querySelector('.btn--modal');

fetch(`${baseUrl}/ping`, {
  method: 'GET', 
}).then(res => {
  return res.json();
})
.then(data => console.log(data));

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const validRes = isValidForm();
  if(!validRes) return;
  fetch(`${baseUrl}/registration`, {
    method: 'POST', 
    body: JSON.stringify({})
  })
  .then(res => {
    return res.json().then(resData => {
      return {
        status: res.status,
        data: resData
      }
    });
  })
  .then(response => {
    switch (response.status) {
      case REQUEST_STATUS_OK:
        onLoad(response.data);
        break;
      case REQUEST_STATUS_BAD:
        onError(response.data);
        break;
    }
  });
})

const onLoad = (data) => {
  fields.forEach(field => field.value = '');
  textarea.value = '';
  successMessage.textContent = data.message;
  successMessage.classList.add('message-show');
  errorMessage.style.display = 'none';
}

const onError = (data) => {
  errorMessage.textContent = data.message;
  errorMessage.classList.add('message-show');
  errorMessage.style.display = '';
}

modalButton.addEventListener('click', modalOpen);
