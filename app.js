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

document.querySelector(".info-bottom-link").click();
