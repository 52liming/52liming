import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "/img/eat/1.png",
    "/img/eat/2.png",
    "/img/eat/3.png",
    "/img/eat/4.png",
    "/img/eat/5.png",
    "/img/eat/6.png",
    "/img/eat/7.png",
    "/img/eat/8.png",
    "/img/eat/9.png",
    "/img/eat/10.png",
    "/img/eat/11.png",
    "/img/eat/12.png",
    "/img/eat/13.png",
    "/img/eat/14.png",
    "/img/eat/15.png",
    "/img/eat/16.png",
    "/img/eat/17.png",
    "/img/eat/18.png",
    "/img/eat/19.png",
    "/img/eat/20.png",
    "/img/eat/21.png"
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

  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

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
