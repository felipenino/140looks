import React from 'react';

// Versão simplificada para testar se o problema está nas imagens do Supabase
const SimpleFloatingImages = () => {
  const staticImages = [
    {
      src: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=100',
      style: { top: '15%', left: '5%', width: '100px' }
    },
    {
      src: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=100',
      style: { top: '25%', right: '8%', width: '90px' }
    },
    {
      src: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=100',
      style: { top: '50%', left: '15%', width: '80px' }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {staticImages.map((image, index) => (
        <div 
          key={index}
          className="absolute animate-pulse"
          style={image.style}
        >
          <img 
            src={image.src} 
            alt="Floating item" 
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleFloatingImages;