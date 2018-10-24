// This is where it all goes :)

document.addEventListener('DOMContentLoaded', () => {

  const nav__icon = document.querySelector(".nav");
  const ul = document.querySelector('.nav__items')

  nav__icon.addEventListener('click', event => {
    ul.classList.toggle('open');
    nav__icon.classList.toggle('open');
  })

})