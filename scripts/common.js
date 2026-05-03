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
            500:{
                slidesPerView:2,
                spaceBetween:15,
                slidesPerGroup:2,
            },
            800:{
                slidesPerView:3, //800 이상일때
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

// 전체메뉴 클릭 시 전체메뉴 나타나기
const mNavOpen = document.querySelector('nav #gnb li:nth-child(1)');
const mBg = document.querySelector('.m_bg');
const mNavClose = document.querySelector('.m_bg .m_side_wrap .top .close');

console.log(mNavOpen, mBg, mNavClose);

mNavOpen.addEventListener('click', function(){ mBgShow('block'); })
mNavClose.addEventListener('click', function(){ mBgShow('none'); })

//매개변수 상태(status)
function mBgShow(status){return mBg.style.display = status;}

// 기초 카테고리 클릭 시 하위 카테고리 나타나기
const baseCate = document.querySelector('.category > li:nth-child(2)');
const depth2 = document.querySelector('.category .cate_depth2_wrap .cate_depth2');
const depth2List = depth2.querySelectorAll('li');
const depth3 = document.querySelector('.category .cate_depth3_wrap');
const depth3List = depth3.querySelectorAll('li')

console.log(baseCate, depth2, depth2List, depth3);

/* baseCate.addEventListener('click', function(){ 
    baseShow(depth2, 'block'); 
    baseCate.classList.add('active');
}) */
baseCate.addEventListener('click', function(){ 
    if(baseCate.classList.contains('active')){
        //이미 열려있으면 닫기
        baseCate.classList.remove('active');
        baseShow(depth2, 'none');
        baseShow(depth3, 'none');
    } else{
        //닫혀있으면 열기
        baseCate.classList.add('active');
        baseShow(depth2, 'block');
    }
});

for(let i = 0; i < depth2List.length; i++){
    depth2List[i].addEventListener('click', function(e){
        e.stopPropagation();
    })
}
depth2List[0].addEventListener('click', function(){
    if(depth2.classList.contains('active')){
        //이미 열려있으면 닫기
        depth2.classList.remove('active');
        baseShow(depth3, 'none');
    } else{
        depth2.classList.add('active');
        baseShow(depth3, 'block');
    }
    
});
depth3.addEventListener('click', function(e){
    e.stopPropagation(); //부모 클릭 막기
});

//매개변수 상태(status)
function baseShow(object, status){return object.style.display = status;}

// header