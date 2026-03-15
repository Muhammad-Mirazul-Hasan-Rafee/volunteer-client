import React, { useState, useEffect } from "react";
import image1 from "../../../assets/Sliders/image1.svg";
import image2 from "../../../assets/Sliders/image2.svg";
import image3 from "../../../assets/Sliders/image3.svg";
import image4 from "../../../assets/Sliders/image4.svg";
import image5 from "../../../assets/Sliders/image5.svg";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[800px] mx-auto overflow-hidden">

      {/* image strip */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-[800px] h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>

    </div>
  );
};

export default Slider;

