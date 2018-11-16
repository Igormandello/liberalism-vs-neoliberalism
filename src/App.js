import React, { Component } from 'react';
import Header from './components/Header';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="intro">
          <h2>Introdução</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable.
          </p>
          <cite>Os Autores</cite>
        </section>
        <section className="divider">
          <h2>História</h2>
        </section>
      </div>
    );
  }
}

export default App;
