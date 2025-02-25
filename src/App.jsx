import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importando componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importando as páginas
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Experiencia from './pages/Experiencia';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
