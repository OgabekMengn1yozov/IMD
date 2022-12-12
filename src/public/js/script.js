let myVideo = document.querySelector(".my-video");
let videoBtn = document.querySelector(".video-btn");
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    videoBtn.classList.add("activ");
  } else {
    myVideo.pause();
    videoBtn.classList.remove("activ");
  }
}

let faBars = document.querySelector(".fa-bars");
let blur = document.querySelector(".blur");
let faX = document.querySelector(".fa-x");
let navbarRight = document.querySelector(".navbar-right");

faBars.addEventListener("click", () => {
  blur.classList.add("activeClass");
});

faX.addEventListener("click", () => {
  blur.classList.remove("activeClass");
});

blur.addEventListener("click", () => {
  blur.classList.remove("activeClass");
});

navbarRight.addEventListener("click", (e) => {
  e.stopPropagation();
});

function menus() {
  blur.classList.remove("activeClass");
}

// day night

let fa__sun = document.querySelector(".fa-sun");
let fa__moon = document.querySelector(".fa-moon");
let body = document.querySelector("#body");
let header = document.querySelector(".header");
let logo__item = document.querySelector(".logo__item");
let p = document.getElementsByTagName("p");
let day__night = document.querySelectorAll(".day__night");
let footer__logos = document.querySelector(".footer__logos");
let day__night__cards1 = document.querySelectorAll(".day__night-cards1");
let day__night__cards2 = document.querySelectorAll(".day__night-cards2");
let day__night__cards3 = document.querySelectorAll(".day__night-cards3");
let border__classs = document.querySelectorAll(".border__classs");
let day__night__chart = document.querySelectorAll(".day-night__chart");
let day__night__card4 = document.querySelectorAll(".day__night-card4");

let day__night__card5 = document.querySelectorAll(".day__night-card5");
let blurbacg = document.querySelector(".blurbacg");

let imgsrc1 = document.querySelector(".imgsrc1");
let imgsrc2 = document.querySelector(".imgsrc2");
let imgsrc3 = document.querySelector(".imgsrc3");
let imgsrc4 = document.querySelector(".imgsrc4");

let color3 = document.querySelector(".color3");

let bacgClass = document.querySelector(".bacgClass");
let bacgClassLogo = document.querySelectorAll(".bacgClassLogo");

let hoverClass = document.querySelectorAll(".hoverClass");

let idScroll = document.querySelector(".idScroll");
let idScroll__item = document.querySelector(".idScroll-item");

fa__moon.addEventListener("click", () => {
  body.style.background = "#000";
  fa__sun.style.display = "flex";
  fa__moon.style.display = "none";
  header.style.background = "rgba(39, 39, 39, 0.2)";
  logo__item.src = "/images/png/IMD logo_Монтажная область 1 2.png";
  footer__logos.src = "/images/png/IMD logo_Монтажная область 1 2.png";

  for (let i = 0; i < day__night.length; i++) {
    day__night[i].classList.add("colorClasss");
  }

  for (let i = 0; i < day__night__cards1.length; i++) {
    day__night__cards1[i].classList.add("bcgclass1");
  }

  for (let i = 0; i < day__night__cards2.length; i++) {
    day__night__cards2[i].classList.add("bcgclass2");
  }

  for (let i = 0; i < day__night__cards3.length; i++) {
    day__night__cards3[i].classList.add("bcgclass3");
  }

  for (let i = 0; i < border__classs.length; i++) {
    border__classs[i].classList.add("borderClass1");
  }

  for (let i = 0; i < day__night__chart.length; i++) {
    day__night__chart[i].classList.add("classCahart");
  }

  for (let i = 0; i < day__night__card4.length; i++) {
    day__night__card4[i].classList.add("bacgClass4");
  }

  for (let i = 0; i < day__night__card5.length; i++) {
    day__night__card5[i].classList.add("bgcClass5");
  }

  imgsrc1.src = "/images/png/Vectoro.png";
  imgsrc2.src = "/images/png/Vectoro (1).png";
  imgsrc3.src = "/images/png/Vectoro (2).png";
  imgsrc4.src = "/images/png/Vectoro (3).png";

  color3.classList.add("activ");

  bacgClass.classList.add("class6");
  blurbacg.classList.add("classBlur");

  for (let i = 0; i < bacgClassLogo.length; i++) {
    bacgClassLogo[i].classList.add("class11");
  }

  for (let i = 0; i < hoverClass.length; i++) {
    hoverClass[i].classList.add("classs");
  }

  idScroll.classList.add("classLists");
  idScroll__item.classList.add("activs");
});

fa__sun.addEventListener("click", () => {
  body.style.background = "var(--siteback)";
  fa__sun.style.display = "none";
  fa__moon.style.display = "flex";
  header.style.background = "#fff";
  logo__item.src = "/images/png/IMD logo_Монтажная область 1 1.png";
  footer__logos.src = "/images/png/IMD logo_Монтажная область 1 1.png";

  for (let i = 0; i < day__night.length; i++) {
    day__night[i].classList.remove("colorClasss");
  }

  for (let i = 0; i < day__night__cards1.length; i++) {
    day__night__cards1[i].classList.remove("bcgclass1");
  }

  for (let i = 0; i < day__night__cards2.length; i++) {
    day__night__cards2[i].classList.remove("bcgclass2");
  }

  for (let i = 0; i < day__night__cards3.length; i++) {
    day__night__cards3[i].classList.remove("bcgclass3");
  }

  for (let i = 0; i < border__classs.length; i++) {
    border__classs[i].classList.remove("borderClass1");
  }

  for (let i = 0; i < day__night__chart.length; i++) {
    day__night__chart[i].classList.remove("classCahart");
  }

  for (let i = 0; i < day__night__card4.length; i++) {
    day__night__card4[i].classList.remove("bacgClass4");
  }

  for (let i = 0; i < day__night__card5.length; i++) {
    day__night__card5[i].classList.remove("bgcClass5");
  }

  imgsrc1.src = "/images/png/Vector (1).png";
  imgsrc2.src = "/images/png/Vector (2).png";
  imgsrc3.src = "/images/png/Vector (3).png";
  imgsrc4.src = "/images/png/Vector (4).png";

  color3.classList.remove("activ");

  bacgClass.classList.remove("class6");
  blurbacg.classList.remove("classBlur");

  for (let i = 0; i < bacgClassLogo.length; i++) {
    bacgClassLogo[i].classList.remove("class11");
  }

  for (let i = 0; i < hoverClass.length; i++) {
    hoverClass[i].classList.remove("classs");
  }

  idScroll.classList.remove("classLists");
  idScroll__item.classList.remove("activs");
});

let idScroll2 = document.querySelector(".idScroll2");

window.addEventListener("scroll", () => {
  idScroll2.classList.toggle("active2", scrollY > 100);
});

let activ3 = document.querySelectorAll(".activ3");
let our__item__right__black1 = document.querySelector(
  ".our-item__right-black1"
);
let our__item__right__black2 = document.querySelector(
  ".our-item__right-black2"
);
let our__item__right__black3 = document.querySelector(
  ".our-item__right-black3"
);
let our__item__right__black4 = document.querySelector(
  ".our-item__right-black4"
);
let our__item__right__black5 = document.querySelector(
  ".our-item__right-black5"
);
let our__item__right__black6 = document.querySelector(
  ".our-item__right-black6"
);

function activ(a) {
  for (let i = 0; i < activ3.length; i++) {
    activ3[i].classList.remove("actives");
  }

  a.classList.add("actives");
}

activ3[0]?.addEventListener("click", () => {
  our__item__right__black1.classList.add("active");
  our__item__right__black2.classList.remove("active");
  our__item__right__black3.classList.remove("active");
  our__item__right__black4.classList.remove("active");
  our__item__right__black5.classList.remove("active");
  our__item__right__black6.classList.remove("active");
});

activ3[1]?.addEventListener("click", () => {
  our__item__right__black1.classList.remove("active");
  our__item__right__black2.classList.add("active");
  our__item__right__black3.classList.remove("active");
  our__item__right__black4.classList.remove("active");
  our__item__right__black5.classList.remove("active");
  our__item__right__black6.classList.remove("active");
});

activ3[2]?.addEventListener("click", () => {
  our__item__right__black1.classList.remove("active");
  our__item__right__black2.classList.remove("active");
  our__item__right__black3.classList.add("active");
  our__item__right__black4.classList.remove("active");
  our__item__right__black5.classList.remove("active");
  our__item__right__black6.classList.remove("active");
});

activ3[3]?.addEventListener("click", () => {
  our__item__right__black1.classList.remove("active");
  our__item__right__black2.classList.remove("active");
  our__item__right__black3.classList.remove("active");
  our__item__right__black4.classList.add("active");
  our__item__right__black5.classList.remove("active");
  our__item__right__black6.classList.remove("active");
});

activ3[4]?.addEventListener("click", () => {
  our__item__right__black1.classList.remove("active");
  our__item__right__black2.classList.remove("active");
  our__item__right__black3.classList.remove("active");
  our__item__right__black4.classList.remove("active");
  our__item__right__black5.classList.add("active");
  our__item__right__black6.classList.remove("active");
});

activ3[5]?.addEventListener("click", () => {
  our__item__right__black1.classList.remove("active");
  our__item__right__black2.classList.remove("active");
  our__item__right__black3.classList.remove("active");
  our__item__right__black4.classList.remove("active");
  our__item__right__black5.classList.remove("active");
  our__item__right__black6.classList.add("active");
});


let clicks = document.querySelectorAll(".clicks");
let activClass = document.querySelectorAll(".customers-item__left li a");
function videos(m) {
  for (let i = 0; i < activClass.length; i++) {
    activClass[i].classList.remove("class");
  }

  m.classList.add("class");
}

let video1 = document.querySelector(".video1");
let video2 = document.querySelector(".video2");
let video3 = document.querySelector(".video3");
let video4 = document.querySelector(".video4");
let video5 = document.querySelector(".video5");
let video6 = document.querySelector(".video6");
let video7 = document.querySelector(".video7");
let video8 = document.querySelector(".video8");
let video9 = document.querySelector(".video9");
let video10 = document.querySelector(".video10");
let video11 = document.querySelector(".video11");

clicks[0].addEventListener("click", () => {
  video1.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[1].addEventListener("click", () => {
  video2.classList.add("activev");
  video1.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[2].addEventListener("click", () => {
  video3.classList.add("activev");
  video2.classList.remove("activev");
  video1.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[3].addEventListener("click", () => {
  video4.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video1.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[4].addEventListener("click", () => {
  video5.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video1.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[5].addEventListener("click", () => {
  video6.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video1.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[6].addEventListener("click", () => {
  video7.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video1.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[7].addEventListener("click", () => {
  video8.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video1.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[8].addEventListener("click", () => {
  video9.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video1.classList.remove("activev");
  video10.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[9].addEventListener("click", () => {
  video10.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video1.classList.remove("activev");
  video11.classList.remove("activev");
});

clicks[10].addEventListener("click", () => {
  video11.classList.add("activev");
  video2.classList.remove("activev");
  video3.classList.remove("activev");
  video4.classList.remove("activev");
  video5.classList.remove("activev");
  video6.classList.remove("activev");
  video7.classList.remove("activev");
  video8.classList.remove("activev");
  video9.classList.remove("activev");
  video10.classList.remove("activev");
  video1.classList.remove("activev");
});