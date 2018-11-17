import React from 'react';
import ScrollManager from '@igormandello/scroll-trigger';
import TimeLineTitle from './TimeLineTitle';
import TimeLineData from './TimeLineData';
import '../css/TimeLine.css';

ScrollManager.offsetTop = 0.25;

function TimeLine() {
  return (
    <div className="timeLine">
      <TimeLineTitle text="Surgimento"/>
      <TimeLineData {...data[0]} withTitles/>
      <TimeLineData {...data[1]}/>
      <TimeLineData {...data[2]}/>
      <TimeLineTitle text="Utilização"/>
      <TimeLineData {...data[3]} withTitles/>
      <TimeLineTitle text="Crise"/>
      <TimeLineData {...data[4]} withTitles/>
    </div>
  );
}

const data = [
  {
    liberalism: {
      year: 1688,
      text: [
        <p key={1}>
          John Locke iniciou a ideia do Liberalismo social.
        </p>,
        <img src={require('../assets/locke.jpg')} alt=""/>
      ]
    }
  },
  {
    liberalism: {
      year: 1765,
      text: [
        <p key={1}>
          Anders Chydenius chegou a descrever conceitos de livre mercado
          e da mão invisível do mercado onze anos antes de Adam Smith 
        </p>,
        <img src={require('../assets/anders.jpg')} alt=""/>
      ]
    }
  },
  {
    liberalism: {
      year: 1776,
      text: [
        <p key={1}>
          Adam Smith, o economista mais famoso quando se trata de Liberalismo.
        </p>,
        <img src={require('../assets/adam.jpg')} alt=""/>,
        <p key={2}>
          Livro 'Wealth of Nations', onde ele descreve conceitos do Liberalismo.
        </p>,
        <img src={require('../assets/wealth.jpg')} alt=""/>
      ]
    },
    neoliberalism: {
      year: 1930,
      text: [
        <p key={1}>
        </p>
      ]
    }
  },
  {
    liberalism: {
      year: 1860,
      text: [
        <p key={1}>
        </p>
      ]
    },
    neoliberalism: {
      year: 1970,
      text: [
        <p key={1}>
        </p>
      ]
    }
  },
  {
    liberalism: {
      year: 1929,
      text: [
        <p key={1}>
          Ações dos EUA no periodo da crise de 1929.
        </p>,
        <img src={require('../assets/crise1929.png')} alt=""/>,
        <p key={1}>
          Desemprego dos EUA no mesmo período.
        </p>,
        <img src={require('../assets/desemprego.jpg')} alt=""/>,
        <iframe title="1929crisis" width="100%" height="300px" src="https://www.youtube.com/embed/Sv7IP2qL0gg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;"/>
      ]
    },
    neoliberalism: {
      year: 2008,
      text: [
        <p key={1}>
          Ações dos EUA no periodo da crise de 2008.
        </p>,
        <img src={require('../assets/crise2008.jpg')} alt=""/>,
        <p key={2}>
          Comparação do prejuízo econômico entre as duas crises
        </p>,
        <img src={require('../assets/comparacao.jpg')} alt=""/>
      ]
    }
  }
]

export default TimeLine;