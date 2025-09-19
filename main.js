// document.addEventListener("DOMContentLoaded", () => {
//   const slider = document.querySelector(".slider");
//   const slides = slider.querySelectorAll("img");
//   const navBtns = document.querySelectorAll(".slider-nav-btns");
//   const intervalTime = 5000;

//   let currentIndex = 0;
//   let autoPlay;

//   // Helper: scroll to the current slide
//   function goToSlide(index) {
//     currentIndex = index % slider.children.length;
//     slider.children[currentIndex].scrollIntoView({
//       behavior: "smooth",
//       inline: "start"
//     });
//     updateNav();
//   }

//   // Update nav button highlight
//   function updateNav() {
//     const total = navBtns.length;
//     const realIndex = currentIndex % total;
//     navBtns.forEach((btn, i) => {
//       if (i === realIndex) {
//         btn.classList.add("bg-[#07BAED]", "rounded-full", "w-3", "h-3");
//       } else {
//         btn.classList.remove("bg-[#07BAED]", "rounded-full", "w-3", "h-3");
//       }
//     });
//   }

//   // Autoplay
//   function startAutoPlay() {
//     autoPlay = setInterval(() => {
//       goToSlide(currentIndex + 1);
//     }, intervalTime);
//   }

//   function stopAutoPlay() {
//     clearInterval(autoPlay);
//   }

//   // Endless loop by recycling slides
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//           const slide = entry.target;

//           // if scrolled past left, move to right
//           if (entry.boundingClientRect.x < 0) {
//             slider.appendChild(slide); // move to end
//           }
//           // if scrolled past right, move to left
//           else {
//             slider.prepend(slide); // move to beginning
//           }
//         }
//       });
//     },
//     {
//       root: slider,
//       threshold: 0.9, // nearly fully out of view
//     }
//   );

//   // Observe each slide
//   slides.forEach((slide) => observer.observe(slide));

//   // Nav button clicks
//   navBtns.forEach((btn, i) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();
//       stopAutoPlay();
//       goToSlide(i);
//       startAutoPlay();
//     });
//   });

//   // Init
//   goToSlide(0);
//   startAutoPlay();
// });


$(document).ready(function(){
  $('.slider').slick({
    infinite: true,           // endless loop
    slidesToShow: 1,          // show one slide at a time
    slidesToScroll: 1,        // scroll one slide at a time
    autoplay: true,           // auto-play
    autoplaySpeed: 5000,      // 5 seconds
    speed: 700,               // transition speed
    arrows: false,            // hide prev/next arrows
    dots: true,               // show nav dots
    pauseOnHover: true,       // pause when hovering
    cssEase: 'ease-in-out',   // smooth transition
    appendDots: $('.slider-nav') // place dots in your custom container
  });
});


