// Experiencia.jsx
import React from 'react';
import '../styles/Experiencia.css';

function Experiencia() {
  return (
    <div className="experiencia-container">
      <div className="experiencia-secoes">
        {/* Coluna 1: Formação Acadêmica e Certificações */}
        <div className="experiencia-coluna">
          <section className="formacao">
            <h2>Formação Acadêmica e Certificações</h2>
            <ul>
              <li>Ensino Médio com Técnico de Informática integrado pelo Instituto Federal de Rondônia - Campus Ji-Paraná.</li>
              <li>Cursando Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Rondônia - Campus Ji-Paraná.</li>
            </ul>
          </section>
        </div>

        {/* Coluna 2: Projetos e Experiências */}
        <div className="experiencia-coluna">
          <section className="projetos">
            <h2>Projetos e Experiências</h2>
            <ul>
              <li>
                <p>Desenvolvimento de sites para defesa de mestrado de acadêmicos do Rio de Janeiro:</p>
                <ul>
                  <li>
                    <a href="https://gingateacapoeira.wixsite.com/gingatea" target="_blank" rel="noopener noreferrer">
                      Site 1: Ginga Tea Capoeira
                    </a>
                  </li>
                  <li>
                    <a href="https://paralimpicoatletis.wixsite.com/atletismo" target="_blank" rel="noopener noreferrer">
                      Site 2: Paralímpico Atletismo
                    </a>
                  </li>
                </ul>
              </li>
              <li>Professor e Técnico de Informática na Fundação Ji-Cred - Projeto Sonho Meu.</li>
              <li>Freelancer na área de marketing digital e design gráfico.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
