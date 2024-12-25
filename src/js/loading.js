window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.transition = "opacity 1.5s ease-out";
  loadingScreen.style.opacity = "0";

  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 1500);
});
