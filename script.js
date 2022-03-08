'use strict';

const popupLinks = document.querySelectorAll('.popup-link'),
  body = document.querySelector('body');
//   currentPopup = document.querySelector('.popup');

let unlock = true;

const timeout = 800;

popupLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log('click');

    const popupName = link.getAttribute('href').replace('#', '');
    const currentPopup = document.getElementById(popupName);
    popupOpen(currentPopup);
    e.preventDefault();
  });
});

const popupCloseIcon = document.querySelectorAll('.close-popup');

popupCloseIcon.forEach((el) => {
  el.addEventListener('click', (e) => {
    console.log('click');
    popupCloseIcon(el.closest('.popup'));
    e.preventDefault();
  });
});

function popupOpen(currentPopup) {
  currentPopup.classList.add('open');
}

function popupClose() {}
