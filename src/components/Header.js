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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, 
          recusandae quisquam quasi amet inventore, fugiat explicabo animi error 
          itaque quam architecto repellat consequatur, doloremque veniam beatae 
          autem unde nulla in?
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