// 
// 
// header

const header = document.querySelector('.header');
const gnb = document.querySelector('.header #gnb');
const gnbMenu = document.querySelectorAll('#gnb .dep1');
const depMenu = document.querySelectorAll('#gnb .gnb_dep2');
const maxHeight = calculateMaxHeight();

gnb.addEventListener('mouseenter', () => {
  gnbOpen(header)
})
gnb.addEventListener('focusin', () => {
  gnbOpen(header)
})
header.addEventListener('mouseleave', () => {
  gnbClose(header)
})
gnb.addEventListener('focusout', () => {
  gnbClose(header)
})

gnbMenu.forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    menu.classList.add('current')
  })
  menu.addEventListener('focusin', () => {
    menu.classList.add('current')
  })

  menu.addEventListener('mouseleave', () => {
    menu.classList.remove('current');
  });
  menu.addEventListener('focusout', () => {
    menu.classList.remove('current');
  });
})

function gnbOpen(header) {
  let headerHeight = maxHeight + 90;
  header.style.height = `${headerHeight}px`
  header.style.boxShadow = 'none'
  header.classList.add('open')
}

function gnbClose(header) {
  header.classList.remove('open');
  header.removeAttribute('style')
}

function calculateMaxHeight() {
  return Math.max(...[...depMenu].map((item) => item.getBoundingClientRect().height));
}
// console.log(...[...depMenu])

// function calculateMaxHeight(){
//   let heights = [...depMenu].map((item) => item.getBoundingClientRect().height);
//   let maxHeight = Math.max.apply(null, heights);
//   return maxHeight;
// }

const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
const langIco = document.querySelector('.lang_wrap button i')
const langA = document.querySelectorAll('.lang_wrap a')

/* langBtn.addEventListener('click', function() {
  if (langList.classList.contains('active')) {
    langList.classList.remove('active');
    langIco.classList.remove('iactive');
  } else {
    langList.classList.add('active');
    langIco.classList.add('iactive');
  }
}); */
langBtn.addEventListener('click', function() {
  langList.classList.toggle('active')
  langIco.classList.toggle('iactive')
})


/* langA.forEach(function(item) {
  item.addEventListener('click', function() {
    langList.classList.toggle('active')
  })
}) */

const allmenu = document.querySelector('#allmenu')
const allmenuOpen = document.querySelector('.btn_allmenu_open')
const allmenuClose = document.querySelector('.btn_allmenu_close')


allmenuOpen.addEventListener('click', function() {
  allmenu.classList.add('allmenuOpen');
});

allmenuClose.addEventListener('click', function() {
  allmenu.classList.remove('allmenuOpen');
});



// 
// 
// quick_menu - 해당 코드 아래에 주석

const quickMenu = document.querySelector('.quick_menu');
let baseTop = parseInt(window.getComputedStyle(quickMenu).top, 10);
// baseTop = quickMenu.getBoundingClientRect().top;

// getComputedStyle().top, 10
// 초기 top 값을 가져와서 숫자로 변환
// 함수 안 , 뒤 숫자는 radix(진수) 지정
// 사실상 10진법 외에는 안쓰임 (아마도)

// quickMenu.style.top은 값을 가져오지 못함
// css 외부파일을 인식하지 못하기 때문
// getComputedStyle() 메소드는 인자로 전달받은 엘리먼트에 최종적으로 적용된 모든 CSS 속성 값을 담은 객체를 반환

// window.getComputedStyle().top은 실제 화면에서 그 요소가 top에서 얼마나 떨어져 있는지를 숫자로 계산해서 알려줌
// *이 요소가 핵심*
// absolute 포지션을 준 오브젝트가 fixed처럼 작동하게 해줌

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  // 초기값 0
  const targetTop = scrollTop + baseTop;
  // 초기값 0에 window.getComputedStyle().top으로 가져온 값을 더함

  quickMenu.style.transition = 'top 1s ease';
  quickMenu.style.top = `${targetTop}px`;
});



//
//
// sec1

const sec1swiper = new Swiper('.sec1_swiper', {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



//
//
// sec2

const coffeeMenu = [
  {
    img: '<img src="/img/menu/COFFEE/Americano.png" alt="아메리카노">',
    name: '아메리카노'
  }, {
    img: '<img src="/img/menu/COFFEE/Caffe_Latte.png" alt="카페 라떼">',
    name: '카페 라떼'
  }, {
    img: '<img src="/img/menu/COFFEE/Caffe_Mocha.png" alt="카페 모카">',
    name: '카페 모카'
  }, {
    img: '<img src="/img/menu/COFFEE/Caramel_Macchiato.png" alt=" 마키아또">',
    name: '카라멜 마키아또'
  }, {
    img: '<img src="/img/menu/COFFEE/affogato.png" alt="아포가토">',
    name: '아포가토'
  }
]
const latteMenu = [
  {
    img: '<img src="/img/menu/LatteChocolateTea/Black_Sugar_Bubble_Tea.png" alt="">',
    name: '흑당 버블티'
  }, {
    img: '<img src="/img/menu/LatteChocolateTea/Honey_Quince_Tea.png" alt="">',
    name: '꿀 모과차'
  }, {
    img: '<img src="/img/menu/LatteChocolateTea/Pink_Pineapple_Chamomile_Tea.png" alt="">',
    name: '핑크 파인 캐모마일티'
  }, {
    img: '<img src="/img/menu/LatteChocolateTea/Royal_Milk_Bubble_Tea.png" alt="">',
    name: '로얄 밀크 버블티'
  }, {
    img: '<img src="/img/menu/LatteChocolateTea/White Chocolate.png" alt="">',
    name: '화이트 초코'
  }
]
const hollyccinoMenu = [
  {
    img: '<img src="/img/menu/HollyccinoBingsu/Cold_Brew_Mocha_Hollyccino.png" alt="콜드브루 모카 할리치노">',
    name: '콜드브루 모카 할리치노'
  }, {
    img: '<img src="/img/menu/HollyccinoBingsu/Hazelnut_Chocochip_Hollyccino.png" alt="헤이즐넛 초코 할리치노">',
    name: '헤이즐넛 초코 할리치노'
  }, {
    img: '<img src="/img/menu/HollyccinoBingsu/Jeju_Matcha_Hollyccino.png" alt="제주 말차 할리치노">',
    name: '제주 말차 할리치노'
  }, {
    img: '<img src="/img/menu/HollyccinoBingsu/Mint_Chocochip_Hollyccino.png" alt="민트 초코칩 할리치노">',
    name: '민트 초코칩 할리치노'
  }, {
    img: '<img src="/img/menu/HollyccinoBingsu/Strawberry_Cheese_Cake_Hollyccino.png" alt="딸기 치즈케익 할리치노">',
    name: '딸기 치즈케익 할리치노'
  }
];

const smoothieMenu = [
  {
    img: '<img src="/img/menu/SmoothieJuice/Jeju_Kumquat_Orange_Smoothie.png" alt="제주 금귤 오렌지 스무디">',
    name: '제주 금귤 오렌지 스무디'
  }, {
    img: '<img src="/img/menu/SmoothieJuice/Orange_Grapefruit_Juice.png" alt="오렌지 자몽 생과일 주스">',
    name: '오렌지 자몽 생과일 주스'
  }, {
    img: '<img src="/img/menu/SmoothieJuice/Apple_Beet_Juice.png" alt="사과 비트 착즙 주스">',
    name: '사과 비트 착즙 주스'
  }, {
    img: '<img src="/img/menu/SmoothieJuice/Apple_Mango_Smoothie.png" alt="애플망고 스무디">',
    name: '애플망고 스무디'
  }, {
    img: '<img src="/img/menu/SmoothieJuice/Peach_Strawberry_Blended.png" alt="피치 딸기 블렌디드">',
    name: '피치 딸기 블렌디드'
  }
];
const sparklingMenu = [
  {
    img: '<img src="/img/menu/Sparkling/Peach_Plum_Sparkling.png" alt="복숭아 자두 스파클링">',
    name: '복숭아 자두 스파클링'
  }, {
    img: '<img src="/img/menu/Sparkling/Yuzu_Grapefruit_Sparkling.png" alt="유자몽 스파클링">',
    name: '유자몽 스파클링'
  }, {
    img: '<img src="/img/menu/Sparkling/Green_Grape_Sparkling.png" alt="청포도 스파클링">',
    name: '청포도 스파클링'
  }
];
const foodMenu = [
  {
    img: '<img src="/img/menu/Food/Egg_Mayo_Salt_Butter_Bread.png" alt="에그마요 소금빵">',
    name: '에그마요 소금빵'
  }, {
    img: '<img src="/img/menu/Food/Mango_Orange_Round_Cake.png" alt="망고오렌지 케이크">',
    name: '망고오렌지 케이크'
  }, {
    img: '<img src="/img/menu/Food/AOP_Butter_Croissant.png" alt="AOP 버터 크루아상">',
    name: 'AOP 버터 크루아상'
  }, {
    img: '<img src="/img/menu/Food/Triple_Chocolate_Cake.png" alt="트리플 초코 케이크">',
    name: '트리플 초코 케이크'
  }, {
    img: '<img src="/img/menu/Food/Fresh_Chicken_Sandwich.png" alt="닭가슴살 샌드위치">',
    name: '닭가슴살 샌드위치'
  }
];
const mdGoodsMenu = [
  {
    img: '<img src="/img/menu/MD_Goods/HOLLYBEAR_COOLER_POUCH.png" alt="할리베어 보냉파우치">',
    name: '할리베어 보냉파우치'
  }, {
    img: '<img src="/img/menu/MD_Goods/SIGNATURE_TUMBLER_BLACK.png" alt="시그니처 텀블러(블랙)">',
    name: '시그니처 텀블러(블랙)'
  }, {
    img: '<img src="/img/menu/MD_Goods/New_Signiture_Mug_Red.png" alt="뉴시그니처 머그(레드)">',
    name: '뉴시그니처 머그(레드)'
  }, {
    img: '<img src="/img/menu/MD_Goods/Handle_Pouch.png" alt="핸들 파우치">',
    name: '핸들 파우치'
  }, {
    img: '<img src="/img/menu/MD_Goods/Wooden_Cereal_Bowl_Spoon_Set.png" alt="우드 시리얼 세트">',
    name: '우드 시리얼 세트'
  }
];
const mdFoodsMenu = [
  {
    img: '<img src="/img/menu/MD_Foods/Heart_Pie.png" alt="하트파이">',
    name: '하트파이'
  }, {
    img: '<img src="/img/menu/MD_Foods/Pressed_Croissant.png" alt="크룽지">',
    name: '크룽지'
  }, {
    img: '<img src="/img/menu/MD_Foods/Signature_Americano_Mini.png" alt="시그니처 아메리카노">',
    name: '시그니처 아메리카노'
  }, {
    img: '<img src="/img/menu/MD_Foods/Signature_Drip_Bag.png" alt="시그니처 드립백">',
    name: '시그니처 드립백'
  }, {
    img: '<img src="/img/menu/MD_Foods/Cranberry_White_Chocolate_Cookie.png" alt="크랜베리 화이트초코">',
    name: '크랜베리 화이트초코'
  }
];


const menuData = [coffeeMenu, latteMenu, hollyccinoMenu, smoothieMenu ,sparklingMenu, foodMenu, mdGoodsMenu, mdFoodsMenu];
const menuSwiperWrapper = document.querySelector('#sec2 .swiper-wrapper')
const menuBtn = document.querySelectorAll('#sec2 .menu_cat a')
const activeTarget = document.querySelectorAll('#sec2 .menu_cat li')

let swiperInstance;
let currentMenuIndex

menuBtn.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    currentMenuIndex = i;

    activeTarget.forEach(el => {
      el.classList.remove('active');
    });
    activeTarget[i].classList.add('active');

    renderSlides(menuData[i]);

    // if(menuItems[4]) {
    //   const fixedWidth = document.querySelector('.fixed_width');
    //   fixWidth.style.cssText = `
    //     overflow: hidden;
    //     width: calc(447 * 3)px;
    //     left: 50%;
    //     transform: translateX(-50%);
    //   `
    // }
  });
});

let previousWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  const isWidening = previousWidth <= 1279 && currentWidth >= 1280;
  const isNarrowing = previousWidth >= 1280 && currentWidth <= 1279;

  const currentSlides = document.querySelectorAll('#sec2 .swiper-wrapper .swiper-slide').length;

  if (currentMenuIndex === 4) { // sparklingMenu
    if (isWidening && currentSlides === 6) {
      renderSlides(menuData[4]);
    } else if (isNarrowing && currentSlides === 3) {
      renderSlides(menuData[4]);
    }
  }

  previousWidth = currentWidth;
});


function renderSlides(menuItems) {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
  // 기존 스와이퍼 인스턴스 제거
  // 지금 이 구조에서 destroy(method)는 굳이 필요하지 않음(아마도)
  // loop가 true로 되어있다든지 좀 더 복잡한 구조로 이루어져 있을때는 스와이퍼 자체 시스템인 observer: true, observeParents: true 로는 완벽하게 해결되지 않음 (추후 다시 제대로 학습)

  menuSwiperWrapper.innerHTML = '';
  // 기존 슬라이드 제거

  if(window.innerWidth >= 1280) {
    menuItems.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <a href="javascript:void(0)">${item.img}</a>
        <p>${item.name}</p>
      `;
      menuSwiperWrapper.appendChild(slide);
    });
    if(menuItems.length >= 5) {
      menuItems.forEach(item => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
          <a href="javascript:void(0)">${item.img}</a>
          <p>${item.name}</p>
        `;
        menuSwiperWrapper.appendChild(slide);
      });
    }
  } else {
    menuItems.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <a href="javascript:void(0)">${item.img}</a>
        <p>${item.name}</p>
      `;
      menuSwiperWrapper.appendChild(slide);
    });
    menuItems.forEach(item => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <a href="javascript:void(0)">${item.img}</a>
        <p>${item.name}</p>
      `;
      menuSwiperWrapper.appendChild(slide);
    });
  }
  
  // 25.04.06 am02:57
  // 병신같은 스와이퍼와의 전쟁.. 쉬운길을 마다하고 가시밭길을 선택했지만 8시간만에 결국 패배를 인정하다..
  // Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters
  // 반드시 복수할 것..
  
  if(window.innerWidth >= 1280) {
    if(menuItems.length >= 5) {
      initSwiper();
    } else {
      initSwiperSec();
    }
  } else {
    initSwiper();
  }
  // 새로운 스와이퍼 생성
  // DOM 안에 slide가 생성되어 있어야 인식함 menuItems.forEach문 앞에 적으면 DOM에 아무것도 작성되어 있지 않기 때문에 정상적으로 작동하지 않음
  // js defer를 쓰는 이유와 같은듯
}

function initSwiper() {
  swiperInstance = new Swiper('.sec2_swiper', {
    observer: true,
    // DOM 변경 감지 활성화
    observeParents: true,
    // 부모 요소의 변경 감지 활성화
    loop: true,
    centeredSlides: true,
    slidesPerView : 'auto',
    spaceBetween : 0,
    navigation: {
      nextEl: '.sec2_btn_next',
      prevEl: '.sec2_btn_prev'
    },
  })
}
function initSwiperSec() {
  swiperInstance = new Swiper('.sec2_swiper', {
    observer: true,
    observeParents: true,
    loop: false,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    centeredSlides: true,
    enabled: false,
    slidesPerView : 'auto',
    spaceBetween : 0,
    navigation: {
      nextEl: '.sec2_btn_next',
      prevEl: '.sec2_btn_prev'
    },
  })
}

renderSlides(coffeeMenu);

// #sec2 swiper
// menu_cat 탭 가로 슬라이딩
// menuItem[4] - 스파클링 메뉴
// 3개 센터배치 loop 방법




//
//
// 