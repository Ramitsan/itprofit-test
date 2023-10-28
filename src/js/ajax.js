const baseUrl = 'http://localhost:9090/api';
const requestStatusOK = 200;
const requestStatusBad = 400;

const form = document.querySelector('.form');
const fields = form.querySelectorAll('input');
const textarea = form.querySelector('textarea');

const successMessage = document.querySelector('.message--success');
const errorMessage = document.querySelector('.message--error');

export const getRequest = () => {
  fetch(`${baseUrl}/ping`, {
    method: 'GET', 
  })
  .then(res => {
    return res.json();
  })
  .then(data => console.log(data));
}

export const postRequest = () => {
  fetch(`${baseUrl}/registration`, {
    method: 'POST', 
    body: JSON.stringify({})
  })
  .then(res => {
    return res.json()
    .then(resData => {
      return {
        status: res.status,
        data: resData
      }
    });
  })
  .then(response => {
    switch (response.status) {
      case requestStatusOK:
        onLoad(response.data);
        break;
      case requestStatusBad:
        onError(response.data);
        break;
    }
  });
}

const onLoad = (data) => {
  fields.forEach(field => field.value = '');
  textarea.value = '';
  successMessage.textContent = data.message;
  errorMessage.classList.remove('message-show');
  successMessage.classList.add('message-show');
}

const onError = (data) => {
  errorMessage.textContent = data.message;
  successMessage.classList.remove('message-show');
  errorMessage.classList.add('message-show');
}


