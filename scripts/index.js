// index.js
// here_bnr swiper
const heroBnrSwiper = document.querySelector('#hero_bnr .swiper');

console.log(heroBnrSwiper);

const mainSwiper = new Swiper(heroBnrSwiper, {
    autoplay:{delay:4000,},
    loop:true,
    
    pagination:{
        el:'#hero_bnr .control_bar .swiper-pagination',
        type:'fraction',
        }
    },
    navigation:{
        prevEl:'#hero_bnr .control_bar .prev',
        nextEl:'#hero_bnr .control_bar .next',
    },
})


// best seller 카테고리 이벤트 JS
const bsCategory = document.querySelectorAll('.best_seller .title .list a');
const bsContents = document.querySelectorAll('.best_list .swiper');

console.log(bsCategory, bsContents);

// 전부 숨기기
for(let i=0; i < bsContents.length; i++) {
    bsContents[i].style.display = 'none';
}
// 첫번째(기초) 콘텐츠만 보이기
bsContents[0].style.display = 'block';

// 클릭 이벤트
for(let i=0; i < bsCategory.length; i++) {
    bsCategory[i].addEventListener('click', function(e){
        e.preventDefault(); // a href 속성 없애기
        for(let j = 0; j < bsContents.length; j++){
            bsContents[j].style.display='none';
            bsCategory[j].classList.remove('active'); // active 제거
        } // 전부 숨기기
        bsContents[i].style.display='block'; // 클릭한 것만 보이기
        bsCategory[i].classList.add('active'); // active 추가
    })
}

/* //초기 상태(기초 콘텐츠만 보이기)
bestSellerTitle[0].style.display = 'none';
bestSellerTitle[1].style.display = 'block';

bestSellerCate[1].addEventListener('click', cateShow);
function cateShow(){
    bestSellerTitle[0].style.display = 'none';
    bestSellerTitle[1].style.display = 'block';
}; */