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
      question: "Preciso saber costurar?",
      answer: "Não, você não precisa saber costurar para aproveitar nosso e-book. Todas as dicas e combinações são feitas com peças prontas que você já possui ou pode comprar. O foco é ensinar a combinar as peças de forma eficiente, não modificá-las."
    },
    {
      question: "Preciso comprar roupas novas?",
      answer: "Não necessariamente. O guia foi desenvolvido para ajudar você a aproveitar melhor as peças que já possui. Claro, podem haver sugestões de itens básicos que complementam o guarda-roupa, mas o objetivo principal é ensinar a montar looks versáteis com poucas peças, economizando seu dinheiro."
    },
    {
      question: "Vou receber o quê?",
      answer: "Você receberá: 1) Um e-book completo em formato PDF com todas as dicas para organizar seu guarda-roupa e criar mais de 140 looks com apenas 14 peças, 2) Acesso ao aplicativo Closet Essencial com todas as combinações em formato digital, 3) Um guia exclusivo de acessórios para elevar seus looks. Tudo isso com acesso imediato após a compra."
    },
    {
      question: "Quanto tempo terei acesso?",
      answer: "O acesso é vitalício! Uma vez que você compra o pacote, terá acesso permanente a todos os materiais. Você pode baixar o PDF para seu dispositivo e acessar quando quiser, mesmo offline. O acesso ao aplicativo também é permanente, através de um login criado no momento da compra."
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
                <a href="#comprar" className="btn-primary text-lg py-6 px-10">
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
              <div className="absolute inset-0 bg-black/50"></div>
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
              <div className="absolute inset-0 bg-black/50"></div>
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
              <div className="absolute inset-0 bg-black/50"></div>
              <h3 className="font-butler text-2xl text-white px-6 text-center relative z-10">Monte um guarda-roupa versátil e completo</h3>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="#comprar" className="btn-primary text-lg py-6 px-10">
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
                    <a href="#comprar" className="btn-primary text-base py-4 px-6 inline-block w-full md:w-auto text-center">
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