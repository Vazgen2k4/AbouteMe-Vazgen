let order = document.querySelector('#modal__order');
let body = document.querySelector('#body');
let exit = document.querySelectorAll('[data-order="order-exit"]');
let btn = document.querySelectorAll('[data-order="order-active"]');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ClickBtnAdd);
}
for (let i = 0; i < exit.length; i++) {
    exit[i].addEventListener('click', ClickBtnDel);
}

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

