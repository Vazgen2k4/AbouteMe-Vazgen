let body = document.querySelector('#body');
let exit = document.querySelectorAll('[data-modal-exit]');
let btn = document.querySelectorAll('[data-modal-btn]');

for (let i = 0; i < btn.length; i++) {
    let modalActive = btn[i].getAttribute('data-modal-btn');
    btn[i].addEventListener('click', item => {
        item.preventDefault();
        document.querySelector(`#${modalActive}`).classList.add('active');
        body.classList.add('_NoScroll');
    });
}

for (let i = 0; i < exit.length; i++) {
    let modalExit = exit[i].getAttribute('data-modal-exit');
    exit[i].addEventListener('click', item => {
        item.preventDefault();
        console.log(modalExit);
        
        document.querySelector(`#${modalExit}`).classList.remove('active');
        body.classList.remove('_NoScroll');
    });
}

