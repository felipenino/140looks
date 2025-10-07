import React from 'react';

const ProductOffer: React.FC = () => {
  // Função para rastrear evento de conversão
  const handlePurchaseClick = () => {
    // Rastrear evento no Facebook Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        location: 'product_offer'
      });
    }
    
    // Rastrear evento no Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'begin_checkout', {
        button_location: 'product_offer'
      });
    }
    
    // Redirecionar para a página de pagamento
    window.location.href = 'https://pay.hotmart.com/C99586077J';
  };

  return (
    <section className="py-16 bg-[#1b1b1b] text-white relative z-10">
      <div className="container-md">
        {/* Título da Seção */}
        <div className="text-center mb-12 relative">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-2">
            TUDO O QUE VOCÊ <span className="text-[#dca53e]">VAI RECEBER</span>
          </h2>
          <div className="flex justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#dca53e]">
              <path d="M12 22L12 2M12 22L6 16M12 22L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Item 1: Guia Closet Essencial */}
        <div className="mb-6 bg-gradient-to-r from-[#dca53e] to-[#f1e196] rounded-lg overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <img 
                src="/images/ebookp.png" 
                alt="Capa do e-book Closet Essencial" 
                className="w-auto h-auto"
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="font-montserrat text-2xl font-bold mb-2 text-[#1b1b1b]">1. Guia Closet Essencial</h3>
              <p className="font-montserrat font-semibold uppercase text-lg mb-3 text-white underline">
                MAIS DE 140 LOOKS USANDO APENAS 18 PEÇAS
              </p>
              <p className="text-[#1b1b1b] mb-3">
              O guia perfeito para você fazer escolhas assertivas e nunca mais sofrer para se arrumar. 
              </p>
              <ul className="space-y-1 text-[#1b1b1b]">
                <li>+ PEÇAS CERTAS que não saem de moda</li>
                <li>+ APRENDA A MONTAR OS SEUS LOOKS na hora de sair</li>
                <li>+ COMBINE AS MESMAS peças para diferentes ocasiões</li>
                <li>+ ECONOMIZE comprando menos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Item 2: Aplicativo Closet Essencial */}
        <div className="mb-6 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(to bottom, #3E7977, #2A4545)' }}>
          <div className="p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 relative flex justify-center">
              <img 
                src="/images/bonus1.png" 
                alt="Aplicativo Closet Essencial" 
                className="w-auto h-auto"
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="font-montserrat text-2xl font-bold mb-2 text-white">2. Aplicativo Closet Essencial</h3>
              <p className="text-white">
                Você também vai receber acesso a um aplicativo com os looks do seu guia. Trazendo praticidade para o dia a dia.
              </p>
            </div>
          </div>
        </div>

        {/* Item 3: Acessórios */}
        <div className="mb-6 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(to bottom, #3E7977, #2A4545)' }}>
          <div className="p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 relative flex justify-center">
              <img 
                src="/images/bonus2.png" 
                alt="Guia de Acessórios" 
                className="w-auto h-auto"
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="font-montserrat text-2xl font-bold mb-2 text-white">3. Acessórios que elevam seu look</h3>
              <p className="text-white">
                Um guia digital com combinações de acessórios para dar aquele up no seu look. Às vezes, o que falta é um detalhe.
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Preço */}
        <div className="mt-12 bg-white text-black-main rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <h3 className="font-montserrat font-bold text-lg uppercase mb-2">CONDIÇÃO ESPECIAL HOJE</h3>
            <p className="text-gray-500 mb-1">de <span className="line-through">R$ 189,00</span></p>
            <p className="text-gray-500 mb-2">por apenas R$ 37,00 ou</p>
            
            <div className="mb-6">
              <p className="font-montserrat text-4xl font-bold">5x de R$ 8,19</p>
              <p className="text-xs text-gray-500">(mais barato que uma blusinha)</p>
            </div>
            
            <button 
              onClick={handlePurchaseClick} 
              className="btn-primary text-lg py-6 px-10"
            >
              COMPRAR AGORA COM DESCONTO
            </button>
            <div className="flex justify-center mb-4 mt-4">
              <img 
                src="/images/satisfacao.png" 
                alt="Compra Segura, Satisfação Garantida, Privacidade Protegida" 
                width="340" 
                height="51" 
                className="h-auto"
              />
            </div>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/Boleto/48.png" alt="Boleto" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/PayPal/48.png" alt="PayPal" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/GooglePay/48.png" alt="Google Pay" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/Visa/48.png" alt="Visa" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/Mastercard/48.png" alt="MasterCard" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/Amex/48.png" alt="Amex" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/ApplePay/48.png" alt="Apple Pay" className="h-[48px]" />
          </div>
          <div className="flex items-center justify-center p-2 rounded h-16">
            <img src="/images/payment-images/Pix/48.png" alt="PIX" className="h-[48px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOffer;