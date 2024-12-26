ScrollReveal().reveal("[data-scroll-reveal='fade-in']", {
  distance: "50px",
  duration: 2000,
  easing: "ease-in-out",
  scale: 0.85,
});

ScrollReveal().reveal("[data-scroll-reveal='fade-in-slide-up']", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  opacity: 0,
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='zoom-in']", {
  scale: 0.8,
  duration: 800,
  easing: "ease-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='rotate-fade-in']", {
  rotate: {
    x: 0,
    y: 0,
    z: 45, // Rotates by 45 degrees
  },
  distance: "20px",
  duration: 1200,
  opacity: 0,
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='slide-in-left']", {
  origin: "left",
  distance: "100px",
  duration: 1000,
  opacity: 0,
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='staggered-fade']", {
  interval: 200, // Delay between animations
  origin: "bottom",
  distance: "40px",
  duration: 2000,
  opacity: 0,
  easing: "ease-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='parallax-slide']", {
  origin: "top",
  distance: "100px",
  duration: 2000,
  opacity: 0.5,
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='scale-fade']", {
  scale: 0.9,
  distance: "0px",
  duration: 2000,
  opacity: 0,
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal("[data-scroll-reveal='delayed-fade']", {
  viewFactor: 0.25,
  duration: 3000,
  opacity: 0,
  distance: "100px",
  reset: true,
});
