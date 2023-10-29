import { getRequest, postRequest } from './js/ajax';
import { isValidForm } from './js/validate';
import { modalOpen, disableScroll} from './js/modal';
import './scss/style.scss';

const form = document.querySelector('.form');
const modalOpenButton = document.querySelector('.btn--modal');

getRequest();

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const validRes = isValidForm();
  if(!validRes) return;
  postRequest();
})

modalOpenButton.addEventListener('click', () => {
  modalOpen();
  disableScroll();
});
