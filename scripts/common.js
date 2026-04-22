// common.js
const productSwiper = document.querySelectorAll('.container .list_container .swiper');

console.log(productSwiper);

/* const bestSwiper = new Swiper(productSwiper[0],{
    slidesPerView:'auto',
    spaceBetween:30,
    slidesPerGroup:4,
    pagination:{
        el:'.list_container .swiper .swiper-pagination',
    }
}) */

// index 제품 스와이퍼 JS
function initSwiper(target){
    return new Swiper(target, {
        slidesPerView:4,
        spaceBetween:30,
        slidesPerGroup:4,
        loop:true,
        pagination:{
            el:'.list_container .swiper .swiper-pagination',
        },
    // swiper navigation
        navigation:{
            prevEl:'.swiper .control_bar .prev',
            nextEl:'.swiper .control_bar .next',
        },
        breakpoints:{
            320:{
                slidesPerView:2,
                slidesPerGroup:2,
            },
            402:{
                slidesPerView:3, //402 이상일때
                spaceBetween:20,
                slidesPerGroup:3,
            },
            1028:{
                slidesPerView:4, //1028 이상일때
            },
        }
    }
    )};

initSwiper(productSwiper[0]);
initSwiper(productSwiper[1]);
initSwiper(productSwiper[2]);

