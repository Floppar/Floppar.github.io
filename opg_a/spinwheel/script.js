function spinWheel() {
  const pointer = document.querySelector(".pointer");

  // Calculate a random number of full rotations (between 2 and 5)
  const fullRotations = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

  // Calculate the random angle to rotate the pointer (clockwise)
  const randomAngle = fullRotations * 360;

  // Set transition duration and easing for smooth spinning (adjust as needed)
  const transitionDuration = 3 * fullRotations; // in seconds
  const easing = "cubic-bezier(0.2, 0.8, 0.2, 1)"; // Adjust the cubic-bezier values
  pointer.style.transition = `transform ${transitionDuration}s ${easing}`;

  // Apply the rotation to the pointer (clockwise)
  pointer.style.transform = `rotate(${randomAngle}deg)`;

  // Disable the spin button during the animation
  document.querySelector("button").disabled = true;

  // Reset transition and button after animation completes
  setTimeout(() => {
    pointer.style.transition = "none";
    document.querySelector("button").disabled = false;

    // Choose a random name from the array
    const names = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"];
    const chosenName = names[Math.floor(Math.random() * names.length)];

    // Display the chosen name
    document.getElementById("result").textContent = `Chosen Section: ${chosenName}`;

    // Reset the pointer position
    pointer.style.transition = "";
    pointer.style.transform = "rotate(0deg)";
  }, transitionDuration * 1000); // Convert seconds to milliseconds
}
