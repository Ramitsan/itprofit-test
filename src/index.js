import { isValidForm } from './js/validate';
import './scss/style.scss';

const baseUrl = 'http://localhost:9090/api';
const REQUEST_STATUS_OK = 200;
const REQUEST_STATUS_BAD = 400;
const form = document.querySelector('.form');
const fields = form.querySelectorAll('input');
const textarea = form.querySelector('textarea');
const successMessage = document.querySelector('.message--success');
const errorMessage = document.querySelector('.message--error');

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
    console.log(response);
    switch (response.status) {
      case REQUEST_STATUS_OK:
        onLoad(response.data);
        break;
      case REQUEST_STATUS_BAD:
        onError(response.data);
        break;
      default:
       console.log(response);
    }
  });
})

const onLoad = (data) => {
  fields.forEach(field => field.value = '');
  textarea.value = '';
  successMessage.style.display = '';
  errorMessage.style.display = 'none';
}

const onError = (data) => {
  successMessage.style.display = 'none';
  errorMessage.style.display = '';
}
