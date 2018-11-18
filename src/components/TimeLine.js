import React from 'react';
import ScrollManager from '@igormandello/scroll-trigger';
import TimeLineTitle from './TimeLineTitle';
import TimeLineData from './TimeLineData';
import Img from './Img';
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
        <Img key={2} src={require('../assets/locke.jpg')}/>,
        <iframe title="locke-ideas" key={3} src="https://www.youtube.com/embed/Yv3ymKyaUIM?end=72" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      ]
    },
    neoliberalism: {
      year: 1944,
      text: [
        <p key={1}>
          Friedrich Hayek propôs os princípios básicos do Neoliberalismo com seu livro, "O Caminho da Servidão".
        </p>,
        <Img key={2} src={require('../assets/hayek.jpg')}/>,
        <Img key={3} style={{ width: '50%', margin: '0 25%' }} src={require('../assets/caminho-da-servidao.jpg')}/>
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
        <Img key={2} src={require('../assets/anders.jpg')}/>
      ]
    },
    neoliberalism: {
      year: 1947,
      text: [
        <p key={1}>
          Hayek convidou alguns intelectuais de sua época que compartilhavam
          da mesma ideologia, fundando a Sociedade Mont Pèlerin.
        </p>,
        <Img key={2} src={require('../assets/sociedade.jpg')}/>
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
        <Img key={2} src={require('../assets/adam.jpg')}/>,
        <p key={3}>
          Livro 'Wealth of Nations', onde ele descreve conceitos do Liberalismo.
        </p>,
        <Img key={4} style={{ width: '50%', margin: '0 25%' }} src={require('../assets/wealth.jpg')}/>
      ]
    }
  },
  {
    liberalism: {
      text: [
        <iframe key={1} title="liberalism" src="https://www.youtube.com/embed/iU-8Uz_nMaQ?start=19&end=290" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      ]
    },
    neoliberalism: {
      text: [
        <iframe key={1} title="neoliberalism" src="https://www.youtube.com/embed/pzVf9ce80Nc?start=47&end=141" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      ]
    }
  },
  {
    liberalism: {
      year: 1861,
      text: [
        <p key={1}>
          Guerra civíl americana, que acelerou o movimento Liberal.
        </p>,
        <Img key={2} src={require('../assets/american-civil-war.jpeg')}/>,
        <p key={3}>
          Abraham Lincon, um dos líderes da guerra civíl, considerado por muitos um símbolo Liberal.
        </p>,
        <Img key={4} src={require('../assets/abraham.jpg')}/>
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
        <Img key={2} src={require('../assets/margaret-ronald.jpeg')}/>,
        <p key={3}>
          Inflação e desemprego no governo de Margaret Thatcher (1979-1990).
        </p>,
        <Img key={4} src={require('../assets/inflacao-margaret.jpeg')}/>,
        <Img key={5} src={require('../assets/desemprego-margaret.jpeg')}/>
      ]
    }
  }, {
    liberalism: {
      year: 1929,
      text: [
        <p key={1}>
          Ações dos EUA no periodo da crise de 1929.
        </p>,
        <Img key={2} src={require('../assets/crise1929.png')}/>,
        <p key={3}>
          Desemprego dos EUA no mesmo período.
        </p>,
        <Img key={4} src={require('../assets/desemprego.jpg')}/>,
        <iframe key={5} title="1929crisis" src="https://www.youtube.com/embed/Sv7IP2qL0gg" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen/>
      ]
    },
    neoliberalism: {
      year: 2008,
      text: [
        <p key={1}>
          Ações dos EUA no periodo da crise de 2008.
        </p>,
        <Img key={2} src={require('../assets/crise2008.jpg')}/>,
        <p key={3}>
          Comparação do prejuízo econômico entre as duas crises
        </p>,
        <Img key={4} src={require('../assets/comparacao.jpg')}/>
      ]
    }
  }, {
    liberalism: {
      text: [
        <p key={1}>
          Para começar: Uma introdução ao liberalismo.
        </p>,
        <iframe key={2} title="liberalismIntro" src="https://www.youtube.com/embed/9qt52lQcyIg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>,
        <p key={3}>
          Um pouco sobre John Locke.
        </p>,
        <iframe key={4} title="locke" src="https://www.youtube.com/embed/SPI9oTr76Ww" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>,
      ]
    },
    neoliberalism: {
      text: [
        <p key={1}>
          Diferenças de Liberalismo e Neoliberalismo.
        </p>,
        <iframe key={2} title="liberalism-vs-neoliberalism" src="https://www.youtube.com/embed/HKaHPJ6smHE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>,
      ]
    }
  }, {
    liberalism: {
      text: [
        <a key={1} target="blank" href="https://www.infoescola.com/filosofia/liberalismo/">O que é Liberalismo? - InfoEscola</a>,
        <a key={2} target="blank" href="https://brasilescola.uol.com.br/economia/liberalismo-economico.htm">Liberalismo Econômico - BrasilEscola UOL</a>
      ]
    },
    neoliberalism: {
      text: [
        <a key={1} target="blank" href="https://brasilescola.uol.com.br/o-que-e/geografia/o-que-e-neoliberalismo.htm">O que é Neoliberalismo? - BrasilEscola UOL</a>,
        <a key={2} target="blank" href="https://www.stoodi.com.br/blog/2018/08/22/neoliberalismo/">Neoliberalismo - Stoodi</a>
      ]
    }
  }
]

export default TimeLine;