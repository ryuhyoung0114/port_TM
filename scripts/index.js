/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */
// index.js
// here_bnr swiper
const heroBnrSwiper = document.querySelector('#hero_bnr .swiper');

console.log(heroBnrSwiper);

const mainSwiper = new Swiper(heroBnrSwiper, {
    autoplay:{delay:4000,},
    loop:true,
    
    pagination:{
        el:'.hero_swiper_wrap .pagi',
        // renderBullet:function(index, className){
        //     return `<span class="${className}" > 0${index + 1}</span>`;
        // },
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

// 사용자 입력값 검증 부재(brand_store_map_search_area)
const input = document.querySelector('#map_search_area');
