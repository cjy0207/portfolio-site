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

