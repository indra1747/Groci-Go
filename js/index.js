let shopping = document.querySelector(".shopping-cart");

document.querySelector('#cart-btn').onclick = () =>
{
    shopping.classList.toggle('active');
    loginpage.classList.remove('active');
    navbar.classList.remove('active');
}

let loginpage = document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = () =>
{
    shopping.classList.remove('active');
    loginpage.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () =>
{
    shopping.classList.remove('active');
    loginpage.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    shopping.classList.remove('active');
    loginpage.classList.remove('active');
    navbar.classList.remove('active');


}




