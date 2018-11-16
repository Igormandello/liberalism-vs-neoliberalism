import React from 'react';
import TimeLineTitle from './TimeLineTitle';
import '../css/TimeLine.css';

function TimeLine() {
  return (
    <div className="timeLine">
      <TimeLineTitle text="Surgimento"/>
      <TimeLineTitle text="Utilização"/>
      <TimeLineTitle text="Crise"/>
    </div>
  );
}

export default TimeLine;