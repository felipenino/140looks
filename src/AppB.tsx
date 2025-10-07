import React, { useEffect, useState } from 'react';
import { ShoppingBag, Sparkles, Calendar, Smartphone, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import FloatingImagesLayer from './components/FloatingImagesLayer';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ProductOffer from './components/ProductOffer';

function AppB() {
  console.log('Renderizando AppB com FloatingImagesLayer');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [videoUnmuted, setVideoUnmuted] = useState(false);

  const videoSrc = `https://www.youtube.com/embed/HyoTGK7muW8?autoplay=1&mute=${videoUnmuted ? 0 : 1}&loop=1&playlist=HyoTGK7muW8&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ data
  const faqItems = [
    {
      question: "É difícil de aplicar na prática? Tenho pouco tempo no dia a dia.",
      answer: "É super simples e direto. Você vai encontrar exemplos visuais, combinações prontas e uma linguagem leve. Foi feito pra funcionar na vida real — inclusive pra quem vive na correria."
    },
    {
      question: "Esse guia é feito para quem?",
      answer: "Foi feito para mulheres reais, que querem se vestir bem com praticidade, sem complicação. Nada técnico, nada exagerado — só o necessário pra destravar sua relação com o seu armário. Inclusive tem ótimas opções de combinações para quem trabalha de maneira presencial e/ou em escritórios."
    },
    {
      question: "Como vou receber o conteúdo?",
      answer: "Assim que finalizar a compra, você vai receber: Um eBook em PDF com todo conteúdo e 140 looks prontos. Um link exclusivo pro WebApp (um mini site interativo, que pode virar um aplicativo, pra facilitar ainda mais o seu acesso). É tudo digital, prático e feito pra você acessar de onde quiser, principalmente no seu celular!"
    },
    {
      question: "E se eu não gostar? Vocês devolvem meu dinheiro?",
      answer: "Tenho certeza de que você vai amar, mas se não for útil pra você, você pode pedir seu dinheiro de volta em até 7 dias após a compra."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black-main relative">
      {/* Floating Images Layer */}
      <FloatingImagesLayer />
      
      {/* Hero Section with Black Background */}
      <section className="py-16 md:py-24 bg-black-main text-white relative z-10">
        <div className="container-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Video - 100% width on mobile, 50% on desktop (Shorts vertical) */}
            <div className="w-full md:w-1/2">
              <div className="aspect-portrait w-full hero-video-wrapper">
                <iframe
                  src={videoSrc}
                  title="Guia prático com 140 looks, usando apenas 18 peças."
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {!videoUnmuted && (
                  <button
                    className="unmute-btn"
                    onClick={() => setVideoUnmuted(true)}
                    aria-label="Ativar som do vídeo"
                  >
                    🔊 Ativar som
                  </button>
                )}
              </div>
            </div>
            
            {/* Text Content - 100% width on mobile, 50% on desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="border border-[#86897E] inline-block px-4 py-2 text-sm font-semibold mb-6" style={{ color: '#86897E' }}>
                Número 1 em vendas
              </div>
              
              <h1 className="font-butler font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                APRENDA A CRIAR
                MAIS DE 140 LOOKS!
                {/* TESTE DE ALTERAÇÃO */}
              </h1>
              
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                O guia perfeito para você fazer compras assertivas, escolhas inteligentes e nunca mais sofrer pensando como usar suas peças do armário.
              </p>
              
              <div className="flex flex-col items-center md:items-start gap-4">
                {/* Price Block above CTA */}
                <div className="price-block">
                  <div className="price-from">DE <span className="price-old">R$ 189,00</span></div>
                  <div className="price-now">por R$ 37,00</div>
                  <div className="price-installments">ou 5x de R$ 8,19</div>
                </div>
                <a href="https://pay.hotmart.com/C99586077J" className="btn-primary-green text-lg py-6 px-10 cta-button-enhanced">
                  PEGAR MEU GUIA DE LOOKS
                </a>
                <p className="text-sm text-red-600 font-semibold">⏰ OFERTA POR TEMPO LIMITADO!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="py-6 border-b border-beige relative z-10">
        <div className="container-md">
          <p className="text-sm text-center uppercase tracking-widest text-taupe">TRANSFORME SEU GUARDA-ROUPA . CLOSET ESSENCIAL</p>
        </div>
      </header>



      {/* Problems Section */}
      <section className="py-24 bg-beige relative z-10 problems-section">
        <div className="w-[90%] mx-auto px-4">
          <div className="bg-white p-12 mx-auto problems-container rounded-2xl">
            <ul className="space-y-6 mb-8 text-lg">
              <li className="text-center problem-item">
                <p>💸 Gasta <strong>FORTUNAS</strong> em roupas que ficam encostadas no armário?</p>
              </li>
              <li className="text-center problem-item">
                <p>😰 Se sente <strong>INVISÍVEL</strong> usando sempre as mesmas 3 combinações?</p>
              </li>
              <li className="text-center problem-item">
                <p>😔 Sua <strong>AUTOESTIMA DESPENCA</strong> quando se olha no espelho?</p>
              </li>
            </ul>
            <div className="text-center mb-8">
              <p className="font-bold text-2xl text-red-600 warning-text">⚠️ PARE! Você está <strong>PERDENDO OPORTUNIDADES</strong> todos os dias por causa disso!</p>
            </div>

            {/* Novo Bloco Verde */}
            <div 
              className="w-full max-w-[920px] mx-auto rounded-xl overflow-hidden green-block"
              style={{ marginTop: '30px' }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Lado Esquerdo - Imagem */}
                <div className="md:w-2/5">
                  <img 
                    src="/images/sem-autestima.png" 
                    alt="Mulher com dificuldade para escolher roupas" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Lado Direito - Texto */}
                <div className="md:w-3/5 p-8 text-left flex flex-col justify-between">
                  <div>
                    <h4 className="text-red-400 text-2xl mb-4 font-bold">💔 O que isso está custando para você?</h4>
                    <p className="text-white font-bold text-xl mb-6">
                      Autoestima no chão, dinheiro jogado fora e oportunidades que <strong className="text-red-400">NUNCA MAIS VOLTAM</strong> <a href="#" className="underline" style={{ color: '#D1F1E1' }}>(sim, até promoção no trabalho está ligada à sua imagem)</a>.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <a href="https://pay.hotmart.com/C99586077J" className="btn-primary-green text-base py-4 px-8 inline-block w-full md:w-auto text-center font-bold cta-button-enhanced">
                      🚀 QUERO PARAR DE ME SABOTAR AGORA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Examples Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container-md text-center mb-16">
          <h2 className="section-subtitle text-3xl md:text-4xl mb-12">Exemplos de Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige p-6 rounded-lg">
              <img src="/images/resultado1.jpg" alt="Resultado 1" className="w-full h-auto rounded-lg mb-4" />
              <p className="text-sm">Combinação casual para o dia a dia</p>
            </div>
            <div className="bg-beige p-6 rounded-lg">
              <img src="/images/resultado2.jpg" alt="Resultado 2" className="w-full h-auto rounded-lg mb-4" />
              <p className="text-sm">Look para o trabalho</p>
            </div>
            <div className="bg-beige p-6 rounded-lg">
              <img src="/images/resultado3.jpg" alt="Resultado 3" className="w-full h-auto rounded-lg mb-4" />
              <p className="text-sm">Estilo para ocasiões especiais</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="https://pay.hotmart.com/C99586077J" className="btn-primary-green text-lg py-6 px-10 cta-button-enhanced">
              💎 QUERO MINHA TRANSFORMAÇÃO COMPLETA
            </a>
            <p className="text-sm text-red-600 font-semibold mt-3">✨ Garantia de 7 dias ou seu dinheiro de volta!</p>
          </div>
        </div>
      </section>

      {/* Depoimentos (imagens 3x2) */}
      <section className="py-24 relative z-10 depoimentos-section">
        <div className="container-md text-center">
          <h2 className="section-subtitle mb-12 text-white">veja o que as mulheres que compraram estão falando:</h2>
          <div className="depoimentos-grid grid grid-cols-1 md:grid-cols-3 gap-1 px-1">
            <img src="/images/depoimentos/1.jpg" alt="Depoimento 1" className="testimonial-img" />
            <img src="/images/depoimentos/2.jpg" alt="Depoimento 2" className="testimonial-img" />
            <img src="/images/depoimentos/3.jpg" alt="Depoimento 3" className="testimonial-img" />
            <img src="/images/depoimentos/4.jpg" alt="Depoimento 4" className="testimonial-img" />
            <img src="/images/depoimentos/5.jpg" alt="Depoimento 5" className="testimonial-img" />
            <img src="/images/depoimentos/6.jpg" alt="Depoimento 6" className="testimonial-img" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-beige relative z-10">
        <div className="container-md">
          <h2 className="section-subtitle text-center mb-16">Perguntas Frequentes</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedFaq === index && (
                  <div className="p-6 pt-0 text-taupe faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a href="https://pay.hotmart.com/C99586077J" className="btn-primary-green text-lg py-6 px-10 cta-button-enhanced">
              🚀 SIM! QUERO ACABAR COM ESSA DOR AGORA
            </a>
            <p className="text-sm text-green-600 font-semibold mt-3">💳 Parcelamento em até 12x no cartão</p>
          </div>
        </div>
      </section>

      {/* Product Offer Section */}
      <ProductOffer />

      {/* Footer */}
      <footer className="py-12 bg-black-main text-white">
        <div className="container-md text-center">
          <p className="text-sm mb-4">© 2023 Closet Essencial. Todos os direitos reservados.</p>
          <p className="text-xs text-taupe">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AppB;