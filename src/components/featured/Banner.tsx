import React from "react";
import { motion } from "framer-motion";

const slides = [{ number: "Featured" }, { number: "Products" }];

const Slider = () => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden bg-[#E6DCD5]">
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "-50%", "0%", "100%"],
          transition: {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex gap-4 items-center justify-center h-full text-6xl text-white py-8">
              <span>{slide.number}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
