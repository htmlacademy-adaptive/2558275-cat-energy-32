/* в этот файл добавляет скрипты*/
const button = document.querySelector('#button');
const nav = document.querySelector('#nav');
const mainNav = document.querySelector('#main-nav');

button.classList.remove('main-header__toggle--close');
mainNav.classList.remove('main-nav--no-js');
button.classList.remove('main-header__toggle--no-js');

button.addEventListener('click', () => {
  button.classList.toggle('main-header__toggle--close');
  button.classList.toggle('main-header__toggle--open');
  nav.classList.toggle('nav-list--open');
});
