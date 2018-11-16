import React from 'react';
import PropTypes from 'prop-types';
import '../css/TimeLineTitle.css';

function TimeLineTitle(props) {
  return (
    <div className="timeLineTitle">
      {props.text}
    </div>
  );
}

TimeLineTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default TimeLineTitle;