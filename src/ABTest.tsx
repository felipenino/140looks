import React, { useState, useEffect } from 'react';
import App from './App';
import AppB from './AppB';

const ABTest: React.FC = () => {
  const [version, setVersion] = useState<'A' | 'B'>('A');

  // Função para alternar entre as versões
  const toggleVersion = () => {
    setVersion(version === 'A' ? 'B' : 'A');
  };

  // Estilo para o botão de alternância
  const toggleButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 9999,
    padding: '10px 15px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  } as React.CSSProperties;

  return (
    <>
      {version === 'A' ? <App /> : <AppB />}
      <button 
        onClick={toggleVersion} 
        style={toggleButtonStyle}
      >
        Versão atual: {version} (Clique para alternar)
      </button>
    </>
  );
};

export default ABTest;