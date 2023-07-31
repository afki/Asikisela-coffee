// toggle navbar
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("keluar");
};

// navbar animation
const stickyNav = document.getElementById("stickyNav");

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  if (window.scrollY > 60) {
    stickyNav.classList.add("scrolling");
  } else {
    stickyNav.classList.remove("scrolling");
  }
});

// navbar animation end

// video

let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector("video");
btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
};
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};

// video end

// map leaflet start
var map = L.map("map").setView([-7.732521, 110.402374], 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker1 = L.marker([-7.752457069401239, 110.40879545397526]).addTo(map);

var marker2 = L.marker([-6.981874111550071, 110.41952536031302]).addTo(map);

marker2
  .bindPopup(
    "<b>Asikisela Semarang</b><br>Jl. Moh. Suyudi No.28, Miroto, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah"
  )
  .openPopup();

marker1
  .bindPopup(
    "<b>Asikisela Jogja</b><br>Jl. Wijaya Kusuma No.234, Dero, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta"
  )
  .openPopup();

// map leaflet end

// to top btn

const toTop = document.getElementById("ignite");

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 900) {
    toTop.classList.add("top-btn");
  } else {
    toTop.classList.remove("top-btn");
  }
});

// to top btn end

// lightbox

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

// lightbox end
