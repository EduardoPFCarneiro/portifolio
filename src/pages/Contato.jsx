// Contatos.jsx
import React from 'react';
import '../styles/Contato.css'; // Estilos específicos para a página de Contatos

function Contatos() {
  return (
    <div className="contatos-container">
      <section className="contatos-secao">
        <h2>Contatos</h2>
        <ul>
          <li>
            <strong>E-mail:</strong> <a href="mailto:eduardopfcarneiro@gmail.com">eduardopfcarneiro@gmail.com</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/EduardoPFCarneiro" target="_blank" rel="noopener noreferrer">https://github.com/EduardoPFCarneiro</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/eduardo-carneiro-4950a3300/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/eduardo-carneiro-4950a3300/</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contatos;
