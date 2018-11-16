import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollManager from '@igormandello/scroll-trigger';
import '../css/TimeLineTitle.css';

class TimeLineTitle extends Component {
  componentDidMount() {
    let sm = new ScrollManager();
    sm.addSection(this.refs.timeLineTitle, () => console.log('oi'));
  }

  render() {
    return (
      <div ref="timeLineTitle" className={'timeLineTitle' + (this.props.hidden ? ' hidden' : '')}>
        {this.props.text}
      </div>
    );
  }
}

TimeLineTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default TimeLineTitle;