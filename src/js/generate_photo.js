function generateFallingPhotos({
  containerId = "parallax-container",
  count = 10,
  photoSrcFolder = "src/resources/parallax_pic/", // Folder containing the photos
  photoSrcMin = 1, // Minimum photo index
  photoSrcMax = 2, // Maximum photo index
  initialTopMax = 5,
  leftMin = 10,
  leftMax = 90,
  rotateMin = -30,
  rotateMax = 30,
  sizeMin = 3,
  sizeMax = 6,
  rellaxSpeedMin = -3,
  rellaxSpeedMax = -5,
} = {}) {
  // 1. Find the container
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  // Generate a pool of unique photo indices and shuffle it
  const photoIndices = Array.from(
    { length: photoSrcMax - photoSrcMin + 1 },
    (_, i) => i + photoSrcMin
  );
  shuffleArray(photoIndices);

  if (count > photoIndices.length) {
    console.error(
      `Count (${count}) exceeds the number of unique photo indices (${photoIndices.length}).`
    );
    return;
  }

  let topMax = 50;
  let topMin = 40;

  // 2. Create and append the images
  for (let i = 1; i <= count; i++) {
    // Randomize top, left, rotation, size, and rellax speed
    topMax += -initialTopMax;
    topMin += -initialTopMax;
    let randomTop;
    let randomPhotoSrc;
    const randomLeft = randomBetween(leftMin, leftMax); // e.g. 0% to 80%
    const randomRotate = randomBetween(rotateMin, rotateMax);
    const randomSize = randomBetween(sizeMin, sizeMax);
    const randomRellaxSpeed = randomIntBetween(rellaxSpeedMax, rellaxSpeedMin);
    const randomPhotoIndex = photoIndices.pop(); // Get a unique index
    if (i <= 10) {
      randomTop = randomBetween(10, 90);
    } else {
      randomTop = randomBetween(topMin, topMax);
    }
    randomPhotoSrc = `${photoSrcFolder}${randomPhotoIndex}.png`;

    // Create an <img> element
    const img = document.createElement("img");
    img.src = randomPhotoSrc;
    img.alt = `Falling Photo ${i}`;
    img.className = "absolute rellax filter drop-shadow-md";
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

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Example usage:
window.addEventListener("load", () => {
  // Generate 10 falling photos
  generateFallingPhotos({ count: 100, photoSrcMax: 100 });

  // Then initialize Rellax
  const rellax = new Rellax(".rellax");
});
