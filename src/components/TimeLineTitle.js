import React from 'react';
import '../css/TimeLineTitle.css';

function TimeLineTitle(props) {
  return (
    <div className="timeLineTitle">
      {props.text}
    </div>
  );
}

export default TimeLineTitle;