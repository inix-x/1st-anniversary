window.addEventListener("load", function () {
  // References to DOM elements
  const audio = document.getElementById("bg-music");
  const startScreen = document.getElementById("start-screen");
  const spinner = document.getElementById("spinner");

  // Wait 2 seconds, then hide the spinner and show the "Enable Music" button
  setTimeout(() => {
    if (spinner) {
      // Hide the spinner
      spinner.style.display = "none";
    }

    // Create the "Enable Music" button
    startScreen.className =
      "bg-[#ffafa6] transition-colors duration-300 fixed inset-0 flex items-center justify-center z-50";
    const enableAudioButton = document.createElement("button");
    enableAudioButton.innerHTML = `
    <p>Start</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>
          `;
    enableAudioButton.className =
      "bg-white text-black px-4 py-2 rounded-md drop-shadow-md fade-in gap-x-2 items-center flex flex-row";

    // Append the button to the start-screen (or .text-center if you prefer)
    startScreen.appendChild(enableAudioButton);

    // When the button is clicked:
    enableAudioButton.addEventListener("click", () => {
      // Update the start screen style (pink background, etc.)
      startScreen.className =
        "bg-[#ffafa6] transition-colors duration-300 fixed inset-0 flex items-center justify-center z-50";

      // Create the scrolling prompt
      const start = document.createElement("div");
      start.innerHTML = `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 256 256"
            >
              <path
                fill="#000"
                d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 164a44.05 44.05 0 0 1-44 44h-32a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h32a44.05 44.05 0 0 1 44 44Zm-48-83v70l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 163V93l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0l24 24a12 12 0 0 1-17 17Z"
              />
            </svg>
            Scroll Slowly Through Our 2024
          `;
      start.className =
        "bg-white text-black px-8 py-4 rounded-md mt-4 fade-in drop-shadow-md flex flex-col items-center justify-center";

      // Add the scroll prompt to the start-screen
      startScreen.appendChild(start);

      // Listen for the first scroll
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

        // Hide the start screen after the animation
        startScreen.addEventListener(
          "animationend",
          () => {
            startScreen.style.display = "none";
          },
          { once: true }
        );

        // Remove the scroll event listener (so it doesn’t fire repeatedly)
        window.removeEventListener("scroll", handleScroll);
      };

      // Attach the scroll listener once
      window.addEventListener("scroll", handleScroll, { once: true });

      // Remove the "Enable Music" button once they've clicked it
      enableAudioButton.remove();
    });
  }, 1000); // End of setTimeout
});
