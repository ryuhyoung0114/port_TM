// common.js
const productSwiper = document.querySelectorAll('.container .list_container .swiper');
const gnb = document.querySelectorAll('nav #gnb > li');
const gnbDepth2 = document.querySelectorAll('nav #gnb li .gnb_depth2');
const depthBg = document.querySelector('nav .depth_bg');

console.log(productSwiper, gnb, gnbDepth2, depthBg);

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
                spaceBetween:15,
                slidesPerGroup:2,
            },
            402:{
                slidesPerView:3, //402 이상일때
                spaceBetween:20,
                slidesPerGroup:3,
            },
            1028:{
                slidesPerView:4, //1028 이상일때
                spaceBetween:30,
                slidesPerGroup:4,
            },
        }
    }
    )};

initSwiper(productSwiper[0]);
initSwiper(productSwiper[1]);
initSwiper(productSwiper[2]);

//gnb 메뉴에 마우스 올렸을 때 관련 lnb 출력
for(let i of gnb){
    console.log(i); //gnb console 출력 확인
    console.log(i.children[1]);
    i.addEventListener('mouseover',function(){
        i.children[1].style.display = 'flex';
        depthBg.style.display = 'block';
    })
    i.addEventListener('mouseout',function(){
        i.children[1].style.display = 'none';
        depthBg.style.display = 'none';
    })
}

