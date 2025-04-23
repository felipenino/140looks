import React, { useState, useEffect } from 'react';
import FloatingImage from './FloatingImage';

// Updated to use local image paths
const CLOTHING_IMAGES = [
  {
    src: '/images/1.png',
    alt: 'Peça de Roupa 1',
    style: { top: '15%', left: '5%', width: '100px', zIndex: 10 },
    delay: 200,
    offsetY: 20,
  },
  {
    src: '/images/2.png',
    alt: 'Peça de Roupa 2',
    style: { top: '25%', right: '8%', width: '90px', zIndex: 10 },
    delay: 400,
    offsetY: 25,
    offsetX: -10,
  },
  {
    src: '/images/3.png',
    alt: 'Peça de Roupa 3',
    style: { top: '55%', left: '7%', width: '110px', zIndex: 10 },
    delay: 600,
    offsetY: 30,
  },
  {
    src: '/images/4.png',
    alt: 'Peça de Roupa 4',
    style: { top: '60%', right: '10%', width: '80px', zIndex: 10 },
    delay: 800,
    offsetY: 15,
    offsetX: 5,
  },
  {
    src: '/images/5.png',
    alt: 'Peça de Roupa 5',
    style: { top: '40%', left: '50%', transform: 'translateX(-50%)', width: '85px', zIndex: 10 },
    delay: 1000,
    offsetY: 22,
  },
  {
    src: '/images/6.png',
    alt: 'Peça de Roupa 6',
    style: { top: '10%', left: '30%', width: '95px', zIndex: 10 },
    delay: 1200,
    offsetY: 18,
  },
  {
    src: '/images/7.png',
    alt: 'Peça de Roupa 7',
    style: { top: '70%', left: '25%', width: '100px', zIndex: 10 },
    delay: 1400,
    offsetY: 25,
  },
  {
    src: '/images/8.png',
    alt: 'Peça de Roupa 8',
    style: { top: '35%', right: '25%', width: '90px', zIndex: 10 },
    delay: 1600,
    offsetY: 20,
  },
  {
    src: '/images/9.png',
    alt: 'Peça de Roupa 9',
    style: { top: '80%', right: '30%', width: '85px', zIndex: 10 },
    delay: 1800,
    offsetY: 15,
  }
];

const FloatingImagesLayer = () => {
  const [images, setImages] = useState(CLOTHING_IMAGES);

  useEffect(() => {
    console.log('FloatingImagesLayer montado');
    
    const handleResize = () => {
      // Hide some elements on mobile to avoid cluttering
      if (window.innerWidth < 768) {
        setImages(CLOTHING_IMAGES.filter((_, index) => index % 2 === 0)); // Show fewer items on mobile
      } else {
        setImages(CLOTHING_IMAGES);
      }
    };

    // Set initial state
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Imagens flutuantes comentadas conforme solicitado
  return (
    <div className="floating-images-container fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* Imagens temporariamente desabilitadas
      {images.map((image, index) => (
        <FloatingImage
          key={index}
          src={image.src}
          alt={image.alt}
          className="absolute"
          style={image.style}
          delay={image.delay}
          offsetX={image.offsetX}
          offsetY={image.offsetY}
        />
      ))}
      */}
    </div>
  );
};

export default FloatingImagesLayer;