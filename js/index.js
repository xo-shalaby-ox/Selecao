// NAV
let list = document.querySelectorAll(".navbar-nav .nav-link");
list.forEach( el => {
    el.addEventListener("click" , function(){
        list.forEach(li => {
            li.classList.remove("active")
        })
        el.classList.add("active")
    })
})

// Testimonials
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    speed: 800,
    grabCursor: 'true',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
},
breakpoints:{
    0: {
        slidesPerView: 1,
    },
    992: {
        slidesPerView: 2,
    },
    1200: {
        slidesPerView: 3,
    },
},
});
// SCROLL ARROW UP
let span = document.getElementById("top");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};
span.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})
// AOS ANIMATION
AOS.init({
    duration: 1200,
  })