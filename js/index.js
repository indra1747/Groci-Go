let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shopping.classList.remove('active');
    loginpage.classList.remove('active');
    navbar.classList.remove('active');
    
}


let shopping = document.querySelector(".shopping-cart");

document.querySelector('#cart-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shopping.classList.toggle('active');
    loginpage.classList.remove('active');
    navbar.classList.remove('active');
}

let loginpage = document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    loginpage.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () =>
{    
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    loginpage.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    loginpage.classList.remove('active');
    navbar.classList.remove('active');


}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween:20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween:20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




