const mobileBtn = document.getElementById('mobile-cta')  //allow us to reference the element id=mobile-cta
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');        //activate menu
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');     //deactivate menu
});