//scroll magic 사용법
// init controller
const controller = new ScrollMagic.Controller();

const spyEls = document.querySelectorAll("section.scroll-spy");

//콜백함수
spyEls.forEach(function (spyEl) {
  // create a scene
  new ScrollMagic.Scene({
    triggerElement : spyEl, //감시할 장면 추가 및 옵션지정
    triggerHook : 0.5 //화면의 50% 지점에서 조여짐 여부 감시(0-1사이 지정)
  })
    .setClassToggle(spyEl, 'show') //요소가 화면에 감지되면 show클래스 추가
    .addTo(controller); //컨트롤러에 장면을 할당(필수)
});

//Swiper
const swiper = new Swiper('.project .swiper', {
  // Optional parameters  옵션지정
  direction: 'horizontal', //수평 슬라이드
  loop: true, //슬라이드 반복 재생 여부
  // autoplay:{
  //   delay : 5000
  // },

  // If we need pagination
  pagination: {
    el: '.project .swiper-pagination',
    clickable : true //사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전 다음 슬라이드
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

const imageModal = document.querySelector('#imageModal')
const imageModalBtnList = document.querySelectorAll('.btn-modal-image')
const imageCloseBtn = document.querySelectorAll('#imageModal .btn-close')
const imageEl = document.querySelector("#imageModal img")


imageModalBtnList.forEach(function(btn){
  btn.addEventListener('click',function(){
    imageEl.src = btn.dataset.imageSrc;
    imageModal.style.display = 'flex'
  })
})

imageCloseBtn.forEach(function(btn){
  btn.addEventListener('click',function(){
    imageModal.style.display = 'none'
  })
})

//ESC키 
document.addEventListener('keydown',function(e){
  if(e.key==='Escape') imageModal.style.display = 'none'
})

//바깥화면
imageModal.addEventListener('click', function(e){
  //console.log(e.currentTarget) 실제 이벤트가 바인딩된 요소. this와 동일한 의미를 가짐(화살표가 아니라 일반 함수에서)
  //if(e.target === imageModal) imageModal.style.display = 'none' //e.target : 현재 이벤트가 발생한 대상(실제로 클릭한 가장 안쪽 요소
  e.stopPropagation // 이벤트 확산을 막는법 (버블링/캽쳐링)
  if(e.target === e.currentTarget) imageModal.style.display = 'none'
})

//현재 연도 표시
//날짜 정보를 가진 js의 date객체를 활용

const currentDate = new Date().getFullYear()
document.querySelector('.this-year').innerHTML = currentDate

//scroll to top
const toTopEl = document.querySelector('.toTop')
const flash = document.querySelectorAll('.animate-flash')

window.addEventListener('scroll', function(){
  //console.log(this.window.scrollY)
  if(this.window.scrollY < 500) {
    toTopEl.style.transform = 'translateX(100px)'
    toTopEl.style.opacity = '0'
    flash.forEach(function(e){
      e.classList.add('animate-flash');
    })
  }else if(this.window.scrollY >= 500){
    toTopEl.style.transform = 'translateX(0)'
    toTopEl.style.opacity = '1'
    flash.forEach(function(e){
      e.classList.remove('animate-flash');
    })
    
  }

})