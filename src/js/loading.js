window.addEventListener("load", function () {
  // Get references to the audio, the entire loading screen, and the spinner
  const audio = document.getElementById("bg-music");
  const startScreen = document.getElementById("start-screen");
  const spinner = document.getElementById("spinner");

  // 1. Delay hiding the spinner and letting the user scroll by 2 seconds
  setTimeout(() => {
    if (spinner) {
      spinner.style.display = "none"; // Hide the spinner
      startScreen.className =
        "bg-[#ffafa6] transition-colors duration-300 fixed inset-0 flex items-center justify-center z-50";

      const start = document.createElement("div");
      start.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#000" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 164a44.05 44.05 0 0 1-44 44h-32a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h32a44.05 44.05 0 0 1 44 44Zm-48-83v70l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 163V93l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0l24 24a12 12 0 0 1-17 17Z"/></svg>
            Scroll Through Our 2024
          `;
      // Style the div
      start.className =
        "bg-white text-black px-8 py-4 rounded-md mt-4 fade-in drop-shadow-md flex flex-col items-center justify-center";

      // Append it to .text-center if found, otherwise directly to #start-screen
      const textCenterDiv = startScreen.querySelector(".text-center");
      if (textCenterDiv) {
        textCenterDiv.appendChild(start);
      } else {
        startScreen.appendChild(start);
      }
    }

    // Create a handler for the scroll event
    const handleScroll = () => {
      // Attempt to play the audio
      if (audio) {
        audio
          .play()
          .then(() => {
            console.log("Music is playing...");
          })
          .catch((error) => {
            console.warn("Autoplay might be blocked:", error);
          });
      }

      // Fade out the start screen
      startScreen.classList.add("fade-out-2s");

      // Once the fade-out animation completes, hide the start screen
      startScreen.addEventListener(
        "animationend",
        () => {
          startScreen.style.display = "none";
        },
        { once: true } // ensure this only fires once
      );

      // Remove this scroll event listener so it doesn't fire repeatedly
      window.removeEventListener("scroll", handleScroll);
    };

    // Listen for scroll just once
    window.addEventListener("scroll", handleScroll, { once: true });
  }, 2000); // Delay of 2 seconds
});
