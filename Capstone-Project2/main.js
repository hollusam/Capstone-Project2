let navBurger = document.querySelector('.burger');
let popUpNav = document.querySelector('.nav-links');
let popUp = document.querySelector('.popup');
let burger = document.querySelector('.burger');
let closeIcon = document.querySelector('.close-icon');

navBurger.addEventListener('click', () => {
    popUpNav.classList.toggle('show-navbar');
    popUp.classList.toggle('show-navbar');
    navBurger.classList.toggle('hide-navbar');
    closeIcon.classList.toggle('hide-navbar');
    closeIcon.classList.toggle('show-navbar');
})

closeIcon.addEventListener('click', () => {
    popUpNav.classList.toggle('show-navbar');
    popUp.classList.toggle('show-navbar');
    navBurger.classList.toggle('hide-navbar');
    closeIcon.classList.toggle('show-navbar');
    closeIcon.classList.toggle('hide-navbar');
})