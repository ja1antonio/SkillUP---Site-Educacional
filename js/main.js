/*============== SHOW MENU ==============*/

const navMenu = document.getElementById('navMenu'),
  navToggle = document.getElementById('navToggle'),
  navClose = document.getElementById('navClose'),
  navOverlay = document.getElementById('navOverlay');

/*===== MENU SHOW =====*/
/* validate if constats exists */

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('showMenu');
    navOverlay.classList.add('showOverlay');
  });
}

/*===== MENU HIDDEN =====*/
/* validate if constats exists */

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('showMenu');
    navOverlay.classList.remove('showOverlay');
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', () => {
    navMenu.classList.remove('showMenu');
    navOverlay.classList.remove('showOverlay');
  });
}

/*============== CHANGE BACKGROUND HEADER ==============*/

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scrollHeader');
  else header.classList.remove('scrollHeader');
}

window.addEventListener('scroll', scrollHeader);
