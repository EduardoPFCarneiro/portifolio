import React from 'react';
import '../styles/SobreMim.css'; // Importe o arquivo CSS para estilizar a página
import minhaFoto from '../assets/Edu.png'; // Importe sua foto (ajuste o caminho conforme necessário)

function SobreMim() {
  return (
    <div className="sobre-mim">
      <section className="sobre-mim-secao">
        <h1>Sobre Mim</h1>
        <div className="sobre-mim-conteudo">
          <img src={minhaFoto} alt="Minha Foto" className="sobre-mim-foto" />
          <div className="sobre-mim-texto">
            <p>
              Olá! Eu sou Eduardo Carneiro, um desenvolvedor apaixonado por tecnologia e soluções inovadoras.
              Com experiência em desenvolvimento front-end e back-end, busco sempre me atualizar nas últimas tendências
              para entregar soluções eficientes e de alta qualidade.
            </p>
            <p>
              Minha jornada começou com a curiosidade por programação e desde então venho me dedicando a aprender
              novas ferramentas e melhorar minhas habilidades. Adoro enfrentar desafios e contribuir para projetos
              que possam fazer a diferença.
            </p>
          </div>
        </div>
      </section>

      <section className="habilidades-secao">
        <h2>Minhas Principais Habilidades</h2>
        <div className="habilidades-lista">
          <div className="habilidade">
            <h3>React</h3>
            <p>Desenvolvimento de interfaces dinâmicas e responsivas usando React.</p>
          </div>
          <div className="habilidade">
            <h3>JavaScript</h3>
            <p>Experiência com JavaScript moderno (ES6+), programação assíncrona, manipulação de DOM.</p>
          </div>
          <div className="habilidade">
            <h3>Node.js</h3>
            <p>Desenvolvimento de servidores back-end com Node.js e Express.</p>
          </div>
          <div className="habilidade">
            <h3>HTML & CSS</h3>
            <p>Conhecimento em HTML5, CSS3 e práticas de design responsivo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreMim;
