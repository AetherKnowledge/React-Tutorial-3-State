import { useState } from "react";
import Activity from "./Activity";

const ActivityWithSample = () => {
  const images = [
    { src: "/sample1.png", alt: "Sample 1" },
    { src: "/sample2.png", alt: "Sample 2" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-row w-full items-center justify-between">
      <Activity />
      <div className="flex flex-col gap-5 items-center justify-center p-6 w-full border-l-1 h-full">
        <div className="mt-10 flex flex-col gap-5 items-center justify-center bg-zinc-950 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Sample Images</h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            {/* Main Image */}
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-300 max-h-150"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Next image"
            >
              →
            </button>

            {/* Image Counter */}
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityWithSample;
