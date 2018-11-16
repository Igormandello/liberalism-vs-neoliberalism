import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header>
      <div className="main">
        <h1>
          Liberalismo e <br/> Neoliberalismo
        </h1>
        <p>
          Uma comparação lado a lado entre o liberalismo clássico e o
          neoliberalismo.
        </p>
      </div>
      <div className="authors">
        <p>Autores</p>
        <span>Gabriel Pallotta</span>
        <span>Igor Mandello</span>
        <span>Vitor Bisterso</span>
        <span>Vitor Bartier</span>
      </div>
    </header>
  );
}

export default Header;