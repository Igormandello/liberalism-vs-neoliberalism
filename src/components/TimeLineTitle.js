import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollManager from '@igormandello/scroll-trigger';
import '../css/TimeLineTitle.css';

class TimeLineTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    let sm = new ScrollManager();
    sm.addSection(this.refs.timeLineTitle, () => this.setState({ hidden: false }));
  }

  render() {
    return (
      <div ref="timeLineTitle" className={'timeLineTitle' + (this.state.hidden ? ' hidden' : '')}>
        {this.props.text}
      </div>
    );
  }
}

TimeLineTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default TimeLineTitle;