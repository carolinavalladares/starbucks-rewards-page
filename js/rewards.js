// Fixed Bar
const fixedBar = document.querySelector(".fixed-bar");
const fixedBarOffset = fixedBar.offsetTop;
function fixBar() {
  if (pageYOffset > fixedBarOffset) {
    fixedBar.classList.add("fix-bar");
  } else {
    fixedBar.classList.remove("fix-bar");
  }
}

window.onscroll = () => {
  fixBar();
};
// =========================================================
// Tabs

function showContent(e, tabName) {
  let i, tabContents, tabs;

  tabContents = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  tabs = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active-tab");
  }

  document.getElementById(tabName).style.display = "block";

  e.currentTarget.classList.add("active-tab");
}
document.querySelector(".default").style.display = "block";
