import React from 'react';
import minhaImagem from "../img/logo.jpeg"
import "../componets/Home.css"


  const showSection = (sectionId) => {
    document.querySelectorAll('main section').forEach(section => {
      section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
  };
const Home =() =>{
  return (
    <div className="App">
      <header>
        <div className="center">
          <img src= {minhaImagem}/>
        </div>
        <h1>RS Studio</h1>
        <h2>Designer de Sobrancelhas</h2>
      </header>

      <main>
        {/* Conteúdo da seção Sobre Mim */}
        <section id="sobre-mim">
          <h3>Sobre mim</h3>
          <p>
          Seja bem vindos ao meu studio, sou apaixonada por realçar a beleza natural de cada pessoa através do design de sobrancelhas. No meu Studio de Designer de Sobrancelha, minha missão é criar sobrancelhas que se tornem verdadeiras obras de arte, realçando a expressão única de cada cliente.
    Com anos de experiência e um olhar treinado para a estética facial, estou comprometido em oferecer serviços de alta qualidade que incluem modelagem, tintura e design personalizado de sobrancelhas. Minha abordagem é sempre personalizada, levando em consideração a forma do rosto, tom de pele e preferências individuais.
    No Studio, você encontrará um ambiente acolhedor e relaxante, onde cuidarei das suas sobrancelhas com atenção aos detalhes e paixão pelo que faço. Meu objetivo é que você saia daqui com sobrancelhas que não apenas realcem sua beleza, mas também elevem sua confiança.
    Se você deseja transformar suas sobrancelhas e realçar sua beleza única, estou aqui para ajudar. Agende uma consulta no Studio de Designer de Sobrancelha [Nome do Seu Studio] e descubra como podemos criar a moldura perfeita para o seu rosto. Estou ansioso para te receber e realçar sua beleza natural.
          </p>
          <h3>Formação</h3>
          <p>
          Minha paixão pelo design de sobrancelhas é respaldada por uma sólida formação e experiência. Sou formado em Designer de Henna e continuo me atualizando constantemente com as tendências mais recentes em design de sobrancelhas e técnicas de beleza. Isso me permite oferecer aos meus clientes os mais altos padrões de qualidade e resultados excepcionais.
    Além da minha formação, minha jornada profissional inclui certificado e trabalho ao lado de grandes autorias nesse ramo. Essas experiências enriqueceram minha habilidade de entender e atender às necessidades individuais de cada cliente.
    No Studio de Designer de Sobrancelha RS Studio, você pode confiar na minha expertise e dedicação para realçar sua beleza de maneira única. Estou comprometido em fornecer um serviço excepcional e resultados que superem suas expectativas.
          </p>

        </section>

        {/* Conteúdo da seção Formação */}
        <section id="cadastre-se.js">
        
          </section>
      </main>

      <footer>
        <a href="https://instagram.com/rayssaemanueledesigner?igshid=MzRIODBiNWFIZA==" target="_blank" rel="noopener noreferrer">
          <img src="./img/Instagram-Logo.wine.svg" alt="Ícone do Instagram" />
          <p>Instagram</p>
        </a>
      </footer>
    </div>
  );
}

export default Home;
