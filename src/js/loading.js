window.addEventListener("load", function () {
  // Get references to the audio, the entire loading screen, and the spinner
  const audio = document.getElementById("bg-music");
  const startScreen = document.getElementById("start-screen");
  const spinner = document.getElementById("spinner");

  // 1. Hide the spinner and "Loading..." text
  if (spinner) {
    spinner.style.display = "none"; // Just hides the spinner
  }

  // 2. Create the start button (use document, not loadingScreen)
  const startButton = document.createElement("button");
  startButton.innerText = "Start the Experience";
  startButton.className = "bg-white text-black px-4 py-2 rounded mt-4 fade-in";

  // 3. On button click: play music (if possible), then fade out
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
    startScreen.classList.add("fade-out");

    // After fade-out animation finishes, hide the element completely
    startScreen.addEventListener(
      "animationend",
      () => {
        startScreen.style.display = "none";
      },
      { once: true } // ensure this only fires once
    );
  });

  // 4. Append the button into the same container that held the loader text
  const textCenterDiv = startScreen.querySelector(".text-center");
  if (textCenterDiv) {
    textCenterDiv.appendChild(startButton);
  }
});
