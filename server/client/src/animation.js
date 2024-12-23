document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the animation name (moveInLeft, moveInRight, moveInBottom)
          const animationName = entry.target.getAttribute("data-animation");
          entry.target.classList.add("visible"); // Add 'visible' to trigger the animation

          // Add corresponding class for specific animation
          if (animationName) {
            entry.target.classList.add(animationName);
          }
        }
      });
    },
    {
      threshold: 0.1, // Trigger when the element is at least 10% visible
    }
  );

  elements.forEach((el) => observer.observe(el)); // Observe all elements with the 'animate' class
});
