'use strict';

// const popupLinks = document.querySelectorAll('.popup-link'),
//   body = document.querySelector('body');
// //   currentPopup = document.querySelector('.popup');

// let unlock = true;

// const timeout = 800;

// popupLinks.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     console.log('click');

//     const popupName = link.getAttribute('href').replace('#', '');
//     const currentPopup = document.getElementById(popupName);
//     popupOpen(currentPopup);
//     e.preventDefault();
//   });
// });

// const popupCloseIcon = document.querySelectorAll('.close-popup');

// popupCloseIcon.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     console.log('click');
//     popupCloseIcon(el.closest('.popup'));
//     e.preventDefault();
//   });
// });

// function popupOpen(currentPopup) {
//   currentPopup.classList.add('open');
// }

// function popupClose() {}

// ---------------burger

const navigation = document.querySelector('.header-mobile');
const menuBtn = document.querySelector('.icon-menu');
const navItem = document.querySelector('.header__link');
const closeBtn = document.querySelector('.icon-menu__close');
// let menuOpen = false;

function openBurgerMenu() {
  closeBtn.classList.add('opened');
  menuBtn.classList.add('close');
  navigation.classList.add('active');
}

function closeBurgerMenu() {
  menuBtn.classList.remove('close');
  navigation.classList.remove('active');
  closeBtn.classList.remove('opened');
}

menuBtn.addEventListener('click', (e) => {
  openBurgerMenu();
  e.preventDefault();
});

closeBtn.addEventListener('click', (e) => {
  closeBurgerMenu();
  e.preventDefault();
});

const navItems = document.querySelectorAll('.header__link');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    closeBurgerMenu();
  });
});
