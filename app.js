const tabsBtn = document.querySelectorAll(".info-bottom-link");
const tabsItems = document.querySelectorAll(".info-bottom-img");

tabsBtn.forEach(onTabClick);

const tabFilter = document.querySelectorAll(".porfolio-filter-btn");

tabFilter.forEach(function (item) {
  item.addEventListener("click", function () {
    let tabFilters = item;
    let tabAtributId = tabFilters.getAttribute("data-btn");

    const tabImg = document.getElementsByClassName("portfolio-img-links-info");

    for (var i = 0; i < tabImg.length; i++) {
      if (tabImg[i].classList.contains(tabAtributId)) {    //class name  gore muqayise edir
     

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
