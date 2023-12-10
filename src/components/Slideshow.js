import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "/img/eat/1.webp",
    "/img/eat/2.webp",
    "/img/eat/3.webp",
    "/img/eat/4.webp",
    "/img/eat/5.webp",
    "/img/eat/6.webp",
    "/img/eat/7.webp",
    "/img/eat/8.webp",
    "/img/eat/9.webp",
    "/img/eat/10.webp",
    "/img/eat/11.webp",
    "/img/eat/12.webp",
    "/img/eat/13.webp",
    "/img/eat/14.webp",
    "/img/eat/15.webp",
    "/img/eat/16.webp",
    "/img/eat/17.webp",
    "/img/eat/18.webp",
    "/img/eat/19.webp",
    "/img/eat/20.webp",
    "/img/eat/21.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 100);
		return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={images[currentIndex]} alt={`Slideshow ${currentIndex}`} 
      onClick={() => setIsPaused(!isPaused)}
      style={{
        width: '80%'
      }}
      />
    </div>
  );
};

export default Slideshow;
