import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Outfit images from Unsplash
import outfit1 from '/images/resultado1.jpg';
import outfit2 from '/images/resultado2.jpg';
import outfit3 from '/images/resultado1.jpg';
import outfit4 from '/images/resultado1.jpg';
import outfit5 from '/images/resultado1.jpg';

const OUTFIT_IMAGES = [
  outfit1,
  outfit2,
  outfit3,
  outfit4,
  outfit5
];

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the middle image as active
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? OUTFIT_IMAGES.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === OUTFIT_IMAGES.length - 1 ? 0 : prevIndex + 1));
  };
  
  // Calculate the visible indices with wrapping
  const getVisibleIndices = () => {
    const numVisible = 5; // Total visible items
    const visibleIndices = [];
    
    const half = Math.floor(numVisible / 2);
    for (let i = -half; i <= half; i++) {
      let index = activeIndex + i;
      // Wrap around
      if (index < 0) index = OUTFIT_IMAGES.length + index;
      if (index >= OUTFIT_IMAGES.length) index = index - OUTFIT_IMAGES.length;
      
      visibleIndices.push(index);
    }
    
    return visibleIndices;
  };
  
  const visibleIndices = getVisibleIndices();
  
  return (
    <div className="testimonials-carousel relative">
      <div className="relative h-[420px] flex items-center justify-center overflow-visible">
        {visibleIndices.map((index, i) => {
          // Determine if this is the active/center image
          const isActive = index === activeIndex;
          
          // Calculate z-index: center item has highest z-index
          const zIndex = isActive ? 30 : 20 - Math.abs(i - 2) * 5;
          
          // Calculate position for staggered effect
          const position = i - 2; // -2, -1, 0, 1, 2
          const translateX = position * 230; // Control overlap
          
          // Calculate styles for each item
          const itemStyle = {
            transform: isActive 
              ? `translateX(${translateX}px) scale(1.1)` 
              : `translateX(${translateX}px)`,
            zIndex,
            transition: 'all 0.4s ease',
            boxShadow: isActive 
              ? '0px 6px 20px rgba(0,0,0,0.15)' 
              : '0px 4px 10px rgba(0,0,0,0.08)',
          };
          
          return (
            <div 
              key={index}
              className={`absolute rounded-md overflow-hidden ${isActive ? 'w-[300px]' : 'w-[260px]'}`}
              style={itemStyle}
            >
              <div className={`${isActive ? 'h-[410px]' : 'h-[350px]'} transition-all duration-400`}>
                <img 
                  src={OUTFIT_IMAGES[index]} 
                  alt={`Outfit example ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-center items-center mt-8 space-x-[60px]">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-[#1D3B36] flex items-center justify-center text-white transition-transform hover:scale-105"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-[#1D3B36] flex items-center justify-center text-white transition-transform hover:scale-105"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;