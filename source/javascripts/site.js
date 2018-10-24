// This is where it all goes :)

document.addEventListener('DOMContentLoaded', () => {
  const nav__icon = document.querySelector(".nav");
  const ul = document.querySelector('.nav__items')


  nav__icon.addEventListener('click', event => {
    ul.classList.toggle('open');
    nav__icon.classList.toggle('open');
  })

  

})

function toggleClass() {
  document.querySelector(".nav").classList.toggle('open');
  document.querySelector('.nav__items').classList.toggle('open');
  }