import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://i.pinimg.com/1200x/eb/5b/60/eb5b607b48d83dcc88623989973482d3.jpg",
      title: "Demon Slayer",
    },
    {
      url: "https://i.pinimg.com/1200x/c8/dd/0f/c8dd0f594ded71da6158ce889fa3cbcc.jpg",
      title: "My love story",
    },
    {
      url: "https://i.pinimg.com/1200x/20/1b/99/201b9936a85a4aee41f7c436039213b8.jpg",
      title: "The Lord of the Rings",
    },
    {
      url: "https://i.pinimg.com/736x/43/35/9e/43359e0154a1078c5c07da89cf33e07c.jpg",
      title: "Tales of hearding god",
    }
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[500px]">
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.url})` }}>
              <div className="bg-black/20 w-full h-full flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition">
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition">
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="flex justify-center py-2 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer transition-all w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600 w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
