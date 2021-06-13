let order = document.querySelector('#modal__order');
let body = document.querySelector('#body');
let exit = document.querySelector('#order__exit');
let btn = document.querySelector('#header__order');
let bg = document.querySelector('#order__bg');

btn.addEventListener('click', ClickBtnAdd);
exit.addEventListener('click', ClickBtnDel);
bg.addEventListener('click', ClickBtnDel);

function ClickBtnAdd (e) {
    e.preventDefault();
    order.classList.add('active');
    body.classList.add('_NoScroll');
}

function ClickBtnDel (e) {
    e.preventDefault();
    order.classList.remove('active');
    body.classList.remove('_NoScroll');
}

