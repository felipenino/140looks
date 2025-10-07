import React, { useEffect, useState } from 'react';
import { ShoppingBag, Sparkles, Calendar, Smartphone, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import FloatingImagesLayer from './components/FloatingImagesLayer';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ProductOffer from './components/ProductOffer';

function App() {
  console.log('Renderizando App com FloatingImagesLayer');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
            {/* Book Image */}
            <div className="md:w-2/5">
              <div className="aspect-[3/4] w-full max-w-md mx-auto flex items-center justify-center">
                <img 
                  src="/images/ebook.png" 
                  alt="Capa do E-book" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:w-3/5 text-center md:text-left">
              <div className="border border-[#86897E] inline-block px-4 py-2 text-sm font-semibold mb-6" style={{ color: '#86897E' }}>
                Número 1 em vendas
              </div>
              
              <h1 className="font-butler font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                CHEGA DE
                PERDER TEMPO ESCOLHENDO ROUPA!
              </h1>
              
              <p className="text-2xl md:text-3xl font-montserrat mb-8" style={{ color: '#86897E' }}>
                APRENDA A CRIAR MAIS DE 140 LOOKS USANDO APENAS 18 PEÇAS.
              </p>
              
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                O guia perfeito para você fazer compras assertivas, escolhas inteligentes e nunca mais sofrer pensando como usar suas peças do armário.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="https://pay.hotmart.com/C99586077J" className="btn-primary text-lg py-6 px-10">
                  QUERO BAIXAR MEU GUIA AGORA
                </a>
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

      {/* Benefits Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
            <div 
              className="w-[280px] h-[310px] mx-auto flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/cover-1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Remova esta div abaixo para eliminar o filtro preto */}
              {/* <div className="absolute inset-0 bg-black/50"></div> */}
              <h3 className="font-butler text-2xl text-white px-6 text-center relative z-10">Crie looks incríveis com as roupas que já tem</h3>
            </div>
            
            <div 
              className="w-[280px] h-[310px] mx-auto flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/cover-2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Remova esta div abaixo para eliminar o filtro preto */}
              {/* <div className="absolute inset-0 bg-black/50"></div> */}
              <h3 className="font-butler text-2xl text-white px-6 text-center relative z-10">Um guarda-roupa prático e funcional</h3>
            </div>
            
            <div 
              className="w-[280px] h-[310px] mx-auto flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/cover-3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Remova esta div abaixo para eliminar o filtro preto */}
              {/* <div className="absolute inset-0 bg-black/50"></div> */}
              <h3 className="font-butler text-2xl text-white px-6 text-center relative z-10">Monte um guarda-roupa versátil e completo</h3>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="https://pay.hotmart.com/C99586077J" className="btn-primary text-lg py-6 px-10">
              COMPRAR POR R$ 37
            </a>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-beige relative z-10">
        <div className="w-[90%] mx-auto px-4">
          <div className="bg-white p-12 mx-auto">
            <ul className="space-y-6 mb-8 text-lg">
              <li className="text-center">
                <p>🤡 Compra roupas caras que não combinam com nada?</p>
              </li>
              <li className="text-center">
                <p>🤷🏻‍♀️ Repete as mesmas combinações por falta de criatividade?</p>
              </li>
              <li className="text-center">
                <p>😯 Sente que NÃO PROJETA A IMAGEM DE MULHER BEM SUCEDIDA?</p>
              </li>
            </ul>
            <div className="text-center mb-8">
              <p className="font-semibold text-xl">⚠️ SE VOCÊ SE IDENTIFICA COM ISSO, SUAS ESCOLHAS ESTÃO SABOTANDO SUA IMAGEM!</p>
            </div>

            {/* Novo Bloco Verde */}
            <div 
              className="w-full max-w-[920px] mx-auto rounded-xl overflow-hidden"
              style={{ backgroundColor: '#1D3B36', marginTop: '30px' }}
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
                    <h4 className="text-white text-xl mb-3">Resultado?</h4>
                    <p className="text-white font-bold text-xl mb-6">
                      Autoestima baixa, desperdício de dinheiro e oportunidades perdidas <a href="#" className="underline" style={{ color: '#D1F1E1' }}>(sim, até promoção no trabalho está ligada à sua imagem)</a>.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <a href="https://pay.hotmart.com/C99586077J" className="btn-primary text-base py-4 px-6 inline-block w-full md:w-auto text-center">
                      NÃO DEIXE SEU GUARDA-ROUPA LIMITAR VOCÊ
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
          
          {/* Carousel component */}
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Nova seção: Product Offer */}
      <ProductOffer />

      {/* FAQ Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container-md">
          <h2 className="section-subtitle text-3xl md:text-4xl text-center mb-16">Perguntas Frequentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-beige pb-6"
              >
                <button 
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                >
                  <h3 className="font-montserrat font-medium text-lg">{item.question}</h3>
                  {expandedFaq === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                
                {/* Answer section that expands/collapses */}
                <div 
                  className={`mt-4 text-taupe overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-24 bg-beige relative z-10">
        <div className="container-md">
          <div className="flex flex-col md:flex-row gap-12 max-w-3xl mx-auto">
            <div className="md:w-1/3">
              <img 
                src="/images/suelenlun.png" 
                alt="Suelen Lungov" 
                className="w-full h-full object-cover object-bottom"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-butler text-3xl mb-6">Conheça quem vai te ajudar a ser uma mulher estilosa e prática.</h2>
              <p className="text-lg mb-6">
               Sou Suelen, consultora de imagem e estilo desde 2008, formada em Moda pela Belas Artes. Criei este eBook para resolver uma das maiores dúvidas que escuto: “Como montar looks estilosos sem precisar de um armário lotado?”. Já ajudei dezenas de mulheres a conquistarem um estilo elegante, moderno e prático, respeitando sua rotina e essência. Destrave sua mente, destrave sua relação com seu armário — com menos peças, mais possibilidades e muito mais confiança na hora de se vestir.

              </p>
              <p className="text-lg mb-6">
              
              </p>
              <p className="font-semibold text-lg">Suelen Lungov</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black-main text-white text-center relative z-10">
        <div className="container-md">
          <p className="text-sm opacity-80">© 2025 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;