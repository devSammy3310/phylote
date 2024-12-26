import { useEffect } from "react";

const useAnimateOnView = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    });

    // Select elements with the "animate" class
    const allAnimatedElements = document.querySelectorAll(".animate");

    // Observe each element
    allAnimatedElements.forEach((element) => observer.observe(element));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
};

export default useAnimateOnView;
