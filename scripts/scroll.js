let scrollBtns = document.querySelectorAll('.header__link');
let navHeigth = document.querySelector('.header').clientHeight + 10;

scrollBtns.forEach( e => {
    let scrollPosition;
    let idBlock;
    e.addEventListener('click', function() {
        e.preventDefault;
        idBlock = this.dataset.scrollto == null ? '.header': `#${String(this.dataset.scrollto)}`;   
        scrollPosition = document.querySelector(idBlock).offsetTop - navHeigth;
        
        window.scrollTo ({
            top: scrollPosition,
            left:0,
            behavior:"smooth"
        });
    });
});