import React, { Component } from 'react';
import Header from './components/Header';
import TimeLine from './components/TimeLine';
import Footer from './components/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="intro">
          <h2>Introdução</h2>
          <p>
            Este trabalho visa comparar o Liberalismo Clássico com o Neoliberalismo,
            mostrando semelhanças e diferenças entre os dois e em quais anos os
            fatos ocorreram.
          </p>
          <p>
            Na linha do tempo abaixo, serão mostradas as três etapas histórias de 
            cada teoria, abordando sua criação, utilização e crise.
          </p>
          <cite>Os Autores</cite>
        </section>
        <section className="divider">
          <h2>História</h2>
        </section>
        <section>
          <TimeLine/>
        </section>
        <section className="conclusion">
          <h2>Conclusão</h2>
          <p>
            Assim, existiram muitas semelhanças entre os dois modelos políticos e econômicos,
            que podem ser vistos em seus conceitos e problemas que passaram.
          </p>
          <p>
            Também podemos perceber que alguns erros do Liberalismo Clássico tentaram ser corrigidos
            durante a crise do Neoliberalismo, para assim diminuir o impacto.
          </p>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
