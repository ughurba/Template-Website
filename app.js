new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 1000,

  // effect:'fade',

  // fadeEffect:{
  //   crossFade:true,
  // }
});

const fagBtns = document.querySelectorAll(".fag-list-in-text");
const fagItem = document.querySelectorAll(".fag-list-text-in-paragraph");
const fagDown = document.querySelectorAll(".fa-chevron-down");
const fagUp = document.querySelectorAll(".fa-chevron-up");
let isActive =false;
fagBtns.forEach(function (item) {
  item.addEventListener("click", function () {
    var fagBtn = item;
    var fagId = fagBtn.getAttribute("data-fag");
    var downId = fagBtn.getAttribute("data-down");
    var upId = fagBtn.getAttribute("data-up");
    var fagTabUp = document.querySelector(upId);
    var fagTab = document.querySelector(fagId);
    var fagTabDown = document.querySelector(downId);

    fagBtn.addEventListener("click",function(){

      isActive = !isActive;
      if(isActive){
        fagItem.forEach(function (item) {
          item.classList.remove("show-btn-active");
        });
        fagBtns.forEach(function (item) {
          item.classList.remove("show-btn-active");
        });
        fagDown.forEach(function (item) {
          item.classList.remove("show-btn-active");
        });
        fagUp.forEach(function (item) {
          item.classList.remove("show-btn-active");
        });

      }else{

        fagBtn.classList.add("show-btn-active");
        fagTab.classList.add("show-btn-active");
        fagTabDown.classList.add("show-btn-active");
        fagTabUp.classList.add("show-btn-active");
      
      }

    });






    fagItem.forEach(function (item) {
      item.classList.remove("show-btn-active");
    });
    fagBtns.forEach(function (item) {
      item.classList.remove("show-btn-active");
    });
    fagDown.forEach(function (item) {
      item.classList.remove("show-btn-active");
    });
    fagUp.forEach(function (item) {
      item.classList.remove("show-btn-active");
    });

    fagBtn.classList.add("show-btn-active");
    fagTab.classList.add("show-btn-active");
    fagTabDown.classList.add("show-btn-active");
    fagTabUp.classList.add("show-btn-active");
  });
});



const tabFilter = document.querySelectorAll(".porfolio-filter-btn");

tabFilter.forEach(function (item) {
  item.addEventListener("click", function () {
    let tabFilters = item;
    let tabAtributId = tabFilters.getAttribute("data-btn");

    const tabImg = document.getElementsByClassName("portfolio-img-links-info");

    for (var i = 0; i < tabImg.length; i++) {
      if (tabImg[i].classList.contains(tabAtributId)) {
       

        tabImg[i].classList.add("filter-active");
      } else {
        tabImg[i].classList.remove("filter-active");
      }
    }

    tabFilter.forEach(function (item) {
      item.classList.remove("filter-active");
    });

    tabFilters.classList.add("filter-active");
  });
});

const tabsBtn = document.querySelectorAll(".info-bottom-link");
const tabsItems = document.querySelectorAll(".info-bottom-img");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  });
}

document.querySelector(".porfolio-filter-btn").click();
document.querySelector(".info-bottom-link").click();
