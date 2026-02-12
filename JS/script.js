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

// counter-sec

document.querySelectorAll(".count").forEach((counter) => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target + " +";
    }
  };

  update();
});

// shop-scroll-sec

var swiper = new Swiper(".categorySlider", {
  slidesPerView: "auto",
  spaceBetween: 46,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
});

// cursor point

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  outline.style.left = e.clientX + "px";
  outline.style.top = e.clientY + "px";
});

// product-page-counting

// const minusBtn = document.querySelector(".minus");
// const plusBtn = document.querySelector(".plus");
// const qtyEl = document.querySelector(".qty");

// let qty = 1;

// plusBtn.addEventListener("click", () => {
//   qty++;
//   qtyEl.textContent = qty;
// });

// minusBtn.addEventListener("click", () => {
//   if (qty > 1) {
//     qty--;
//     qtyEl.textContent = qty;
//   }
// });
