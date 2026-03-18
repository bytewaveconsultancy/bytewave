//Navbar
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

const dropdownParent = document.querySelector('.nav__item--dropdown');
const dropdownMenu = document.querySelector('.dropdown');
const dropdownLink = document.querySelector('.nav__link--dropdown');

// Hamburger toggle
hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

// Close nav when clicking normal links
navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', (e) => {
    if (!navItemEl.classList.contains('nav__item--dropdown')) {
      navEl.classList.remove('nav--open');
      hamburgerEl.classList.remove('hamburger--open');
      dropdownParent.classList.remove('active');
      dropdownMenu.classList.remove('show');
    }
  });
});

// Mobile dropdown toggle
dropdownLink.addEventListener('click', function(e) {
  if (window.innerWidth <= 650) {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
    dropdownParent.classList.toggle('active');
  }
});


// Header Hero Video
const video = document.getElementById("heroVideo");
const toggleBtn = document.getElementById("videoToggle");

// Fade in when ready
video.addEventListener("canplay", () => {
  video.classList.add("loaded");
});

// Play / Pause toggle
toggleBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = "Pause";
  } else {
    video.pause();
    toggleBtn.textContent = "Play";
  }
});

// Pause video when not visible (performance boost)
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    video.pause();
  } else {
    video.play();
  }
});



// Header Services Slider
new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  observer: true,
  observeParents: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



const sections = document.querySelectorAll(".line-container");
sections.forEach(container => {
  const ball = container.querySelector(".ball");
  let position = 0;
  let direction = 1;
  function animate() {
    const max = container.offsetWidth - ball.offsetWidth;
    position += direction * 2;
    if (position >= max || position <= 0) {
      direction *= -1;
    }
    ball.style.left = position + "px";
    requestAnimationFrame(animate);
  }
  animate();
});



const vid = document.getElementById("myVideo");
const btn = document.getElementById("playPauseBtn");

btn.addEventListener("click", () => {
  if (vid.paused) {
    vid.play();
    btn.textContent = "❚❚"; // pause icon
  } else {
    vid.pause();
    btn.textContent = "▶"; // play icon
  }
});

// Hide button while playing (optional UX improvement)
vid.addEventListener("play", () => {
  btn.style.opacity = "0.7";
});

vid.addEventListener("pause", () => {
  btn.style.opacity = "1";
});


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});



// const track=document.querySelector(".orbit-track")
// const cards=document.querySelectorAll(".orbit-card")
// const prev=document.querySelector(".arrow-left")
// const next=document.querySelector(".arrow-right")

// let index=0

// function visibleCards(){

// if(window.innerWidth<=640) return 1
// if(window.innerWidth<=1024) return 2
// return 4

// }

// function update(){

// const card=cards[0]
// const gap=parseInt(getComputedStyle(track).gap)
// const width=card.offsetWidth+gap

// track.style.transform=`translateX(-${index*width}px)`

// prev.disabled=index===0
// next.disabled=index>=cards.length-visibleCards()

// }

// next.onclick=()=>{

// if(index<cards.length-visibleCards()){
// index++
// update()
// }

// }

// prev.onclick=()=>{

// if(index>0){
// index--
// update()
// }

// }

// /* swipe */

// let startX=0

// track.addEventListener("touchstart",e=>{
// startX=e.touches[0].clientX
// })

// track.addEventListener("touchend",e=>{

// let endX=e.changedTouches[0].clientX

// if(startX-endX>50 && index<cards.length-visibleCards()) index++
// if(endX-startX>50 && index>0) index--

// update()

// })

// window.addEventListener("resize",update)

// update()

