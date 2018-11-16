import React from 'react';
import PropTypes from 'prop-types';
import '../css/TimeLineData.css';

function TimeLineData(props) {
  return (
    <div className="timeLineData">
      {
        props.withTitles && 
        <div className="titles">
          <span>Liberalismo</span>
          <span>Neoliberalismo</span>
        </div>
      }
      <div className="data">
        <div>
          <h3>{props.liberalism.year}...</h3>
          {props.liberalism.text}
        </div>
        <div>
          <h3>{props.neoliberalism.year}...</h3>
          {props.neoliberalism.text}
        </div>
      </div>
    </div>
  );
}

let objectShape = PropTypes.shape({
  year: PropTypes.number.isRequired,
  text: PropTypes.arrayOf(PropTypes.node).isRequired
})

TimeLineData.propTypes = {
  withTitles: PropTypes.bool,
  liberalism: objectShape.isRequired,
  neoliberalism: objectShape.isRequired
}

export default TimeLineData;