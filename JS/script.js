var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".cardSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".heroSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Coutner Code
// Counting Numbers
// const counters = document.querySelectorAll(".count");
// const totalDuration = 2000; // total time for animation (2s)
// const easeOutQuad = (t) => t * (2 - t);

// function startCounters() {
//   counters.forEach((counter) => {
//     counter.innerText = "0 +"; // reset before starting
//     const target = Number(counter.getAttribute("data-target")) || 0;
//     let startTime = null;

//     const updateCount = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / totalDuration, 1);
//       const easedProgress = easeOutQuad(progress);
//       const current = Math.floor(target * easedProgress);

//       if (progress < 1) {
//         counter.innerText = current.toLocaleString() + " +";
//         requestAnimationFrame(updateCount);
//       } else {
//         counter.innerText = formatNumber(target) + " +";
//       }
//     };

//     requestAnimationFrame(updateCount);
//   });
// }
