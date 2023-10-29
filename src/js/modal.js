const modal = document.querySelector('.modal');
const modalCloseButton = modal.querySelector('.btn--modal-close');


export const modalOpen = () => {
  modal.classList.add('modal--show');
}

const modalClose = () => {
  modal.classList.remove('modal--show');
}

export const disableScroll = function() {
  document.body.classList.add('body-scroll');
}

const activateScroll = function() {
  document.body.classList.remove('body-scroll');
}

modalCloseButton.addEventListener('click', () => {
  modalClose();
  activateScroll();
})
