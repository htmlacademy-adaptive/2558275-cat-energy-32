var e=document.querySelector("#button"),t=document.querySelector("#nav"),o=document.querySelector("#main-nav");e.classList.remove("main-header__toggle--close");o.classList.remove("main-nav--no-js");e.classList.remove("main-header__toggle--no-js");e.addEventListener("click",()=>{e.classList.toggle("main-header__toggle--close"),e.classList.toggle("main-header__toggle--open"),t.classList.toggle("nav-list--open")});
