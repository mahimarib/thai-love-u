window.onload = function () {
    

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile');
    const body = document.body;

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('active');
        body.classList.toggle('fixed');
    });
};
