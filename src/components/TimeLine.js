import React from 'react';
import TimeLineTitle from './TimeLineTitle';
import TimeLineData from './TimeLineData';
import '../css/TimeLine.css';

function TimeLine() {
  return (
    <div className="timeLine">
      <TimeLineTitle text="Surgimento"/>
      <TimeLineData />
      <TimeLineTitle text="Utilização"/>
      <TimeLineTitle text="Crise"/>
    </div>
  );
}

export default TimeLine;