/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */
// 1. 탭 콘텐츠 숨기기
// 2. 탭 제목 클릭
// 3. 카테고리 내용 숨기기, 탭 내용 보이기
// 4. 카테고리 제목 클릭
// 5. 카테고리 내용 보이기, 탭 내용 숨기기

// 변수
const tabContents = document.querySelectorAll('.product_wrap');
const tabTitle = document.querySelectorAll('.boncept_left .contents_tab');

console.log(tabContents, tabTitle);

// 1. 탭 콘텐츠 숨기기(전부 숨기기)
for(let i=0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
}
// ALL 콘텐츠만 보이기
tabContents[0].style.display = 'flex';

// 클릭이벤트
for(let i=0; i < tabTitle.length; i++) {
    tabTitle[i].addEventListener('click', function(e){
        e.preventDefault(); // href 속성 없애기
        for(let j=0; j < tabContents.length; j++) {
            tabContents[j].style.display = 'none';
            tabTitle[j].classList.remove('active'); // active 제거
        } // 전부 숨기기
        tabContents[i].style.display = 'flex'; // 클릭한 것만 보이기
        tabTitle[i].classList.add('active'); // active 추가
    })
}

