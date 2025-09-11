"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const Slide: React.FC<SlideProps> = ({ slide, index, current, handleSlideClick }) => {
  return (
    <div
      className={`relative h-80 w-full cursor-pointer transition-all duration-300 ${
        index === current ? "scale-105" : "scale-95 opacity-70"
      }`}
      onClick={() => handleSlideClick(index)}
    >
      <img
        src={slide.src}
        alt={slide.title}
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/20 rounded-lg" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
        <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
          {slide.button}
        </button>
      </div>
    </div>
  );
};

const CarouselControl: React.FC<CarouselControlProps> = ({ type, title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="absolute top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
      title={title}
    >
      {type === "previous" ? (
        <span className="text-gray-800 font-bold text-lg">‹</span>
      ) : (
        <span className="text-gray-800 font-bold text-lg">›</span>
      )}
    </button>
  );
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrent(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const handleSlideClick = (index: number) => {
    setCurrent(index);
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const handlePrevious = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <div className="relative w-full max-w-xs mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <Slide
                  slide={slide}
                  index={index}
                  current={current}
                  handleSlideClick={handleSlideClick}
                />
              </div>
            ))}
          </div>
        </div>

        <CarouselControl
          type="previous"
          title="Previous slide"
          handleClick={handlePrevious}
        />
        <CarouselControl
          type="next"
          title="Next slide"
          handleClick={handleNext}
        />

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
