window.addEventListener("load", function () {
  // Get references to the audio, the entire loading screen, and the spinner
  const audio = document.getElementById("bg-music");
  const startScreen = document.getElementById("start-screen");
  const spinner = document.getElementById("spinner");

  // 1. Delay hiding the spinner and showing the start button by 2 seconds
  setTimeout(() => {
    if (spinner) {
      spinner.style.display = "none"; // Just hides the spinner
      startScreen.className =
        "bg-[#ffafa6] transition-colors duration-300 fixed inset-0 flex items-center justify-center z-50";
    }

    // Create the start button
    const startButton = document.createElement("button");
    startButton.innerText = "Scroll Through Our 2024";
    startButton.className =
      "bg-white text-black px-8 py-4 rounded-md mt-4 fade-in drop-shadow-md";

    // On button click: play music (if possible), then fade out
    startButton.addEventListener("click", () => {
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

      // Add the fade-out class
      startScreen.classList.add("fade-out-2s");

      // After fade-out animation finishes, hide the element completely
      startScreen.addEventListener(
        "animationend",
        () => {
          startScreen.style.display = "none";
        },
        { once: true } // ensure this only fires once
      );
    });

    // Append the button into the same container that held the loader text
    const textCenterDiv = startScreen.querySelector(".text-center");
    if (textCenterDiv) {
      textCenterDiv.appendChild(startButton);
    }
  }, 1000); // Delay of 2 seconds (2000 milliseconds)
});
