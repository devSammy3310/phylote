import { useEffect } from "react";

const useAnimateOnView = (options = { threshold: 0.5, rootMargin: "0px" }) => {
  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add or remove "in-view" class depending on visibility
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, options);

    // Select elements with the "animate" class
    const allAnimatedElements = document.querySelectorAll(".animate");

    // Observe each element
    allAnimatedElements.forEach((element) => observer.observe(element));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [options]); // Only re-run effect if options change
};

export default useAnimateOnView;
