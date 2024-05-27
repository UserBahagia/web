// search on click
const searchfrom = document.querySelector(".search-from");
const search = document.querySelector("#search");
document.querySelector(".search").onclick = (e) => {
  searchfrom.classList.toggle("active");
  search.focus();
  e.preventDevault();
};

// saat diklick diluar search menghilang
const searchclick = document.querySelector(".search");
document.addEventListener("click", function (e) {
  if (!searchclick.contains(e.target) && !searchfrom.contains(e.target)) {
    searchfrom.classList.remove("active");
  }
});
// search on click end

// navbar onclick
const nav = document.querySelector(".nav");
document.querySelector(".menu").onclick = () => {
  nav.classList.toggle("active");
};

// saat diclick diluar nav menghilang

const menu = document.querySelector(".menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// navbar onclick end

// box detail onclick

const boxdetail = document.querySelector(".box-detail");
document.querySelector(".pop-up").onclick = (e) => {
  boxdetail.classList.toggle("active");
};

document.querySelector(".close").onclick = (e) => {
  boxdetail.classList.remove("active");
};

// // saat diklick diluar box menghilang
// const close = document.querySelector(".close");
// const fromdetail = document.querySelector(".from-detail");
// document.addEventListener("click", function (e) {
//   if (!close.contains(e.target) && !fromdetail.contains(e.target)) {
//     fromdetail.classList.remove("active");
//   }
// });
// // box detail onclick end


// saat discroll kebawah hilang dan saat discroll ke atas muncul
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.cssText = "top: 0; z-index: 1";
  } else {
    document.querySelector("header").style.cssText = "top: -30em;";
  }
  prevScrollpos = currentScrollPos;
};


// slide image
