function generateFallingPhotos({
  containerId = "parallax-container",
  count = 10,
  photoSrcFolder = "resources/parallax_pic/", // Folder containing the photos
  photoSrcMin = 1, // Minimum photo index
  photoSrcMax = 2, // Maximum photo index
  initialTopMin = 5,
  initialTopMax = 10,
  leftMin = 10,
  leftMax = 90,
  rotateMin = -30,
  rotateMax = 30,
  sizeMin = 3,
  sizeMax = 6,
  rellaxSpeedMin = -1,
  rellaxSpeedMax = -4,
} = {}) {
  // 1. Find the container
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }
  let topMax = initialTopMax;
  let topMin = initialTopMin;
  // 2. Create and append the images
  for (let i = 1; i <= count; i++) {
    // Randomize top, left, rotation, size, and rellax speed
    topMax += -initialTopMax;
    topMin += -initialTopMin;
    const randomTop = randomBetween(topMin, topMax); // e.g. -20% down to -200%
    const randomLeft = randomBetween(leftMin, leftMax); // e.g. 0% to 80%
    const randomRotate = randomBetween(rotateMin, rotateMax);
    const randomSize = randomBetween(sizeMin, sizeMax);
    const randomRellaxSpeed = randomIntBetween(rellaxSpeedMax, rellaxSpeedMin);
    const randomPhotoIndex = randomIntBetween(photoSrcMin, photoSrcMax);
    const randomPhotoSrc = `${photoSrcFolder}${randomPhotoIndex}.png`;
    // NOTE: Since rellax speeds are negative, pass (max, min) to get negative values

    // Create an <img> element
    const img = document.createElement("img");
    img.src = randomPhotoSrc;
    img.alt = `Falling Photo ${i}`;
    img.className = "absolute rellax filter drop-shadow-xl";
    img.style.top = `${randomTop}%`;
    img.style.left = `${randomLeft}%`;
    img.style.width = `${randomSize}rem`;
    img.style.height = `${randomSize}rem`;
    img.style.transform = `rotate(${randomRotate}deg)`;
    img.setAttribute("data-rellax-speed", randomRellaxSpeed);

    // Append to container
    container.appendChild(img);
  }
}

// Helper function for random floating numbers
function randomBetween(min, max) {
  // If min > max, swap them
  if (min > max) [min, max] = [max, min];
  return Math.random() * (max - min) + min; // e.g. 5.123
}

// Helper function for random integers (inclusive)
function randomIntBetween(min, max) {
  // If min > max, swap them
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min; // e.g. 3
}

// Example usage:
window.addEventListener("load", () => {
  // Generate 10 falling photos
  generateFallingPhotos({ count: 200 });

  // Then initialize Rellax
  const rellax = new Rellax(".rellax");
});
