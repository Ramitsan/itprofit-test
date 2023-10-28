import { getRequest, postRequest } from './js/ajax';
import { isValidForm } from './js/validate';
import { modalOpen} from './js/modal';
import './scss/style.scss';

const form = document.querySelector('.form');
const modalButton = document.querySelector('.btn--modal');

getRequest();

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const validRes = isValidForm();
  if(!validRes) return;
  postRequest();
})

modalButton.addEventListener('click', modalOpen);
