var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    speed: 4000,
    loop: true,
    allowTouchMove: false,
    autoplay:{
        delay:0.2,
        disableOnInteraction: false
    },
    breakpoints:{
        320:{
          slidesPerView: 1.7
        },
        480:{
            slidesPerView: 2.5
        }
      }
  });

  var swiper_slide = new Swiper(".slide-free", {
    slidesPerView: 3.1,
    spaceBetween: 24,
    speed: 4000,
    loop: true,
    allowTouchMove: false,
    autoplay:{
        delay:0.2,
        disableOnInteraction: false
    },
  });

const heading = document.querySelector('header');

function HandleScroll() {
    if(scrollY >= 80){
        heading.classList.add('active');
    }
    else{
        heading.classList.remove('active');
    }
}

document.addEventListener('scroll', HandleScroll);

const btnMobile = document.querySelector('.js-mobile');
const overlayJs = document.querySelector('.js-overlay');
function HandleMobile(){
    document.documentElement.classList.toggle('menu-mobile-opened');
}

btnMobile.addEventListener('click', HandleMobile);
overlayJs.addEventListener('click', HandleMobile);


const parag = document.querySelector('.js-p');


if(window.innerWidth <= 560){
    parag.innerText = 'Making music accessible for all. Join the largest music events ever made by humanity.';
}

