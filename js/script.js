'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // ---------------burger
  const navigation = document.querySelector('.header-mobile');
  const menuBtn = document.querySelector('.icon-menu');
  const navItem = document.querySelector('.header__link');
  const closeBtn = document.querySelector('.icon-menu__close');

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

  // login popup
  const regBtns = document.querySelectorAll('.popup-link'),
    popupWrapper = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup__content'),
    closePopupBtn = document.querySelector('.close-popup');

  //add class selected to the a tag that was clicked
  function selectRegBtn(id) {
    regBtns.forEach((btn) => {
      btn.classList.toggle('selected', btn.id === id);
      openPopup();
    });
  }

  // open and close popup menu
  function openPopup() {
    popupWrapper.classList.toggle('popup-open');
    popupContent.classList.toggle('popup__content-open');
  }

  //clicking on cross button forwards the user back in history to the main page
  closePopupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    history.back(-1);
  });

  //when popup is opened adds #login to the url and adds an entry to the history
  regBtns.forEach((btn) => {
    let id = btn.id;
    btn.addEventListener('click', (e) => {
      history.pushState({ id }, null, `./#login`);
      e.preventDefault();
      selectRegBtn(id);
    });
  });

  window.addEventListener('popstate', (e) => {
    console.log(e.state);
    if (e.state !== null) {
      selectRegBtn(e.state.id);
    } else {
      selectRegBtn(null);
    }
  });

  history.replaceState({ id: null }, 'dfgh', `./`);
});
