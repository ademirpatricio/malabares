import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({ images }) {

  const [current, setCurrent] = useState(0);

  // PRÓXIMO
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  // ANTERIOR
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  return (

    <div className="
      relative
      w-full
      h-[500px]
      overflow-hidden
      rounded-xl
    ">

      {/* TRACK */}
      <div
        className="
          flex
          h-full
          transition-transform
          duration-500
          ease-in-out
        "
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >

        {
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="
                min-w-full
                h-full
                object-cover
              "
            />
          ))
        }

      </div>

      {/* BOTÃO ESQUERDA */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2

          z-10

          w-12 h-12
          rounded-md

          bg-black/50
          hover:bg-black/80

          flex items-center justify-center

          transition-all duration-300
          cursor-pointer
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* BOTÃO DIREITA */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          z-10

          w-12 h-12
          rounded-md

          bg-black/50
          hover:bg-black/80

          flex items-center justify-center

          transition-all duration-300
          cursor-pointer
        "
      >
        <ChevronRight size={28} />
      </button>

    </div>

  );
}

export default ImageSlider;