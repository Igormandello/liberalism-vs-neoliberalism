import React from 'react';
import TimeLineTitle from './TimeLineTitle';
import TimeLineData from './TimeLineData';
import '../css/TimeLine.css';

function TimeLine() {
  return (
    <div className="timeLine">
      <TimeLineTitle text="Surgimento"/>
      <TimeLineData {...data[0]} withTitles/>
      <TimeLineData {...data[0]}/>
      <TimeLineTitle text="Utilização"/>
      <TimeLineData {...data[0]} withTitles/>
      <TimeLineTitle text="Crise"/>
    </div>
  );
}

const data = [
  {
    key: 1,
    liberalism: {
      year: 1860,
      text: [
        <p key={1}> 
          There are many variations of passages of Lorem Ipsum available,  
          but the majority have suffered alteration in some form, by injected  
          humour, or randomised words which don't look even slightly believable.  
          If you are going to use a passage of Lorem Ipsum, you need to be  
          sure there isn't anything embarrassing hidden in the middle of text. 
        </p>,
         <p key={2}>
         There are many variations of passages of Lorem Ipsum available,  
         but the majority have suffered alteration in some form, by injected  
         humour, or randomised words which don't look even slightly believable.  
         If you are going to use a passage of Lorem Ipsum, you need to be  
         sure there isn't anything embarrassing hidden in the middle of text. 
       </p>
      ]
    },
    neoliberalism: {
      year: 2000,
      text: [
        <p key={1}> 
          There are many variations of passages of Lorem Ipsum available,  
          but the majority have suffered alteration in some form, by injected  
          humour, or randomised words which don't look even slightly believable.  
          If you are going to use a passage of Lorem Ipsum, you need to be  
          sure there isn't anything embarrassing hidden in the middle of text. 
        </p>,
        <p key={2}>
         There are many variations of passages of Lorem Ipsum available,  
         but the majority have suffered alteration in some form, by injected  
         humour, or randomised words which don't look even slightly believable.  
         If you are going to use a passage of Lorem Ipsum, you need to be  
         sure there isn't anything embarrassing hidden in the middle of text. 
       </p>
      ]
    }
  }
]

export default TimeLine;