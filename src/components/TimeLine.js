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
        <img src="https://www.intellectualtakeout.org/sites/ito/files/john_locke.jpg" />
      ]
    }
  },
  {
    liberalism: {
      year: 1765,
      text: [
        <p key={1}>
        </p>
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
      year: 1776,
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
        </p>
      ]
    },
    neoliberalism: {
      year: 2008,
      text: [
        <p key={1}>
        </p>
      ]
    }
  }
]

export default TimeLine;