import React, { useEffect, useRef, useState } from 'react';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
}

const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  delay = 0,
  duration = 1000,
  offsetX = 0,
  offsetY = 30,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(`Tentando carregar imagem: ${src}`);
    
    // Fallback para mostrar a imagem mesmo que o IntersectionObserver falhe
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearTimeout(timer);
    };
  }, [src]);

  useEffect(() => {
    let timeoutId: number;
    
    if (isInView) {
      timeoutId = window.setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      // Não esconda as imagens quando saírem do viewport para diagnóstico
      // setIsVisible(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isInView, delay]);

  const animationStyle = {
    transform: isVisible 
      ? `translate(${offsetX}px, ${offsetY}px)` 
      : `translate(${offsetX}px, ${offsetY + 30}px)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
    ...style,
  };

  return (
    <div 
      ref={imgRef}
      className={`floating-image ${className}`}
      style={animationStyle}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain"
        onError={(e) => console.error(`Erro ao carregar imagem: ${src}`, e)}
        onLoad={() => console.log(`Imagem carregada com sucesso: ${src}`)}
      />
    </div>
  );
};

export default FloatingImage;