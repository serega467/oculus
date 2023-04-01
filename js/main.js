'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
       item.classList.remove('tabs__btn-item--active'); 
    });
    
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active'); 
    });

   tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// процесс нажатия на нашу кнопку (бургер меню) будет храниться в константе menuBtn
const menuBtn = document.querySelector('.menu-btn');

// процесс нажатия на наше меню будет храниться в константе menu
const menu = document.querySelector('.menu');

// благодаря обработчику событий - addEventListener, при клике на нашу кнопку (бургер меню), будет происходить следующее
menuBtn.addEventListener('click', () => {
    //к классу .menu будет добавляться класс .menu--active
    menu.classList.toggle('menu--active');
});
