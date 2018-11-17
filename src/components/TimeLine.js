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
      <TimeLineTitle text="Princípios"/>
      <TimeLineData {...data[3]} withTitles/>
      <TimeLineTitle text="Utilização"/>
      <TimeLineData {...data[4]} withTitles/>
      <TimeLineTitle text="Crise"/>
      <TimeLineData {...data[5]} withTitles/>
      <TimeLineTitle text="Vídeos recomendados"/>
      <TimeLineData {...data[6]} withTitles/>
      <TimeLineTitle text="Leia sobre"/>
      <TimeLineData {...data[7]} withTitles/>
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
    },
    neoliberalism: {
      year: 1944,
      text: [
        <p key={1}>
          Friedrich Hayek propôs os princípios básicos do Neoliberalismo com seu livro, "O Caminho da Servidão".
        </p>,
        <img src={require('../assets/hayek.jpg')} alt=""/>,
        <img style={{ width: '50%', margin: '0 25%' }} src={require('../assets/caminho-da-servidao.jpg')} alt=""/>
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
    },
    neoliberalism: {
      year: 1947,
      text: [
        <p key={1}>
          Hayek convidou alguns intelectuais de sua época que compartilhavam
          da mesma ideologia, fundando a Sociedade Mont Pèlerin.
        </p>,
        <img src={require('../assets/sociedade.jpg')} alt=""/>
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
        <img style={{ width: '50%', margin: '0 25%' }} src={require('../assets/wealth.jpg')} alt=""/>
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
      year: '',
      text: [
        <iframe src="https://www.youtube.com/embed/iU-8Uz_nMaQ?start=19&end=290" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      ]
    },
    neoliberalism: {
      year: '',
      text: [
        <iframe src="https://www.youtube.com/embed/pzVf9ce80Nc?start=47&end=141" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      year: '1979/1981',
      text: [
        <p key={1}>
          O governo de Margaret Thatcher na Inglaterra foi o primeiro com
          ideais neoliberais. No mesmo período também ocorreu o de Ronald
          Reagan.
        </p>,
        <img src={require('../assets/margaret-ronald.jpeg')} alt=""/>,
        <p key={2}>
          Inflação e desemprego no governo de Margaret Thatcher (1979-1990).
        </p>,
        <img src={require('../assets/inflacao-margaret.jpeg')} alt=""/>,
        <img src={require('../assets/desemprego-margaret.jpeg')} alt=""/>
      ]
    }
  }, {
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
        <iframe title="1929crisis" src="https://www.youtube.com/embed/Sv7IP2qL0gg" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;"/>
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
  }, {
    liberalism: {
      text: [
        <h4 key={1}>
          Para começar: Uma introdução ao liberalismo.
        </h4>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9qt52lQcyIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        <h4 key={1}>
          Um pouco sobre John Locke.
        </h4>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SPI9oTr76Ww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      ]
    },
    neoliberalism: {
      text: [
        <h4 key={1}>
          Diferenças de Liberalismo e Neoliberalismo.
        </h4>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HKaHPJ6smHE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      ]
    }
  }, {
    liberalism: {
      text: [
        <a target="blank" href="https://www.infoescola.com/filosofia/liberalismo/">O que é Liberalismo? - InfoEscola</a>,
        <a target="blank" href="https://brasilescola.uol.com.br/economia/liberalismo-economico.htm">Liberalismo Econômico - BrasilEscola UOL</a>
      ]
    },
    neoliberalism: {
      text: [
        <a target="blank" href="https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-neoliberalismo.htm">O que é Neoliberalismo? - BrasilEscola UOL</a>,
        <a target="blank" href="https://www.stoodi.com.br/blog/2018/08/22/neoliberalismo/">Neoliberalismo - Stoodi</a>
      ]
    }
  }
]

export default TimeLine;