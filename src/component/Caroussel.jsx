import { useRef } from "react";
import { useState, useEffect } from "react";

const Caroussel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();
  const interValRef = useRef(0);

  useEffect(() => {
    const { slides } = getSlidesInfo();
    slides[0].setAttribute("data-active", "true");

    startSlide();
  }, []);

  function startSlide() {
    interValRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const { slides, count } = getSlidesInfo();

        const newIndex = prev === count - 1 ? 0 : prev + 1;

        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });

        return newIndex;
      });
    }, 5000);
  }

  function handleNext() {
    clearInterval(interValRef.current);
    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });

    startSlide();
    setCurrentIndex(newIndex);
  }

  function handlePrev() {
    clearInterval(interValRef.current);
    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });

    startSlide();
    setCurrentIndex(newIndex);
  }

  function getSlidesInfo() {
    const carouselBox = carouselRef.current;
    const slides = carouselBox.children;
    const count = slides.length;

    return { slides, count };
  }

  return (
    <div className="carousel">
      <div ref={carouselRef} className="box">
        {children}
      </div>
      <div className="btn">

      <button onClick={handlePrev}>◀</button>
      <button onClick={handleNext}>▶</button>
      </div>

    </div>
  );
};

export default Caroussel;
