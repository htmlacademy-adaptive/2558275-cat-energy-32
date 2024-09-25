/* в этот файл добавляет скрипты*/
const button = document.querySelector('#button');
const nav = document.querySelector('#nav');
const mainNav = document.querySelector('#main-nav');

button.classList.remove('main-nav__toggle--close');
mainNav.classList.remove('main-nav--no-js');

button.addEventListener('click', () => {
  button.classList.toggle('main-nav__toggle--close');
  nav.classList.toggle('nav-list--open');
});
