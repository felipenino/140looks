import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import outfit1 from '/images/resultado1.jpg';
import outfit2 from '/images/resultado2.jpg';
import outfit3 from '/images/resultado3.jpg';
import outfit4 from '/images/resultado4.jpg';
import outfit5 from '/images/resultado5.jpg';
import outfit6 from '/images/resultado6.jpg';
import outfit7 from '/images/resultado7.jpg';
import outfit8 from '/images/resultado8.jpg';
import outfit9 from '/images/resultado9.jpg';

const OUTFIT_IMAGES = [
  outfit1,
  outfit2,
  outfit3,
  outfit4,
  outfit5,
  outfit6,
  outfit7,
  outfit8,
  outfit9,
  // Adicione aqui as novas imagens que você importou
];

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Definir o índice inicial para o meio da lista após o primeiro render
  useEffect(() => {
    setActiveIndex(Math.min(2, Math.floor(OUTFIT_IMAGES.length / 2)));
  }, []);
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? OUTFIT_IMAGES.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Corresponde à duração da transição
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === OUTFIT_IMAGES.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // Corresponde à duração da transição
  };
  
  // Calcular os índices visíveis com wrapping
  const getVisibleIndices = () => {
    const numVisible = Math.min(5, OUTFIT_IMAGES.length); // Total de itens visíveis, limitado ao número de imagens
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
          // Determinar se esta é a imagem ativa/central
          const isActive = index === activeIndex;
          
          // Calcular z-index: item central tem o z-index mais alto
          const zIndex = isActive ? 30 : 20 - Math.abs(i - Math.floor(visibleIndices.length / 2)) * 5;
          
          // Calcular posição para efeito escalonado
          const position = i - Math.floor(visibleIndices.length / 2);
          const translateX = position * 230; // Controlar sobreposição
          
          // Calcular estilos para cada item
          const itemStyle = {
            transform: isActive 
              ? `translateX(${translateX}px) scale(1.1)` 
              : `translateX(${translateX}px)`,
            zIndex,
            transition: 'all 0.4s ease',
            boxShadow: isActive 
              ? '0px 6px 20px rgba(0,0,0,0.15)' 
              : '0px 4px 10px rgba(0,0,0,0.08)',
            opacity: 1,
          };
          
          return (
            <div 
              key={`slide-${index}`}
              className={`absolute rounded-md overflow-hidden ${isActive ? 'w-[300px]' : 'w-[260px]'}`}
              style={itemStyle}
            >
              <div className={`${isActive ? 'h-[410px]' : 'h-[350px]'} transition-all duration-400`}>
                <img 
                  src={OUTFIT_IMAGES[index]} 
                  alt={`Outfit example ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Setas de navegação */}
      <div className="flex justify-center items-center mt-8 space-x-[60px]">
        <button 
          onClick={handlePrev}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full bg-[#1D3B36] flex items-center justify-center text-white transition-transform hover:scale-105 disabled:opacity-70"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full bg-[#1D3B36] flex items-center justify-center text-white transition-transform hover:scale-105 disabled:opacity-70"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;