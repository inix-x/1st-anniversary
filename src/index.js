// Initialize Rellax.js for parallax
const rellax = new Rellax(".parallax");

// Initialize ScrollReveal for animations
ScrollReveal().reveal("section", {
  duration: 1000,
  scale: 0.8,
  distance: "50px",
  easing: "ease-in-out",
  reset: true,
});
