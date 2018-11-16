import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollManager from '@igormandello/scroll-trigger';
import '../css/TimeLineData.css';

class TimeLineData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    let sm = new ScrollManager();
    sm.addSection(this.refs.timeLineData, () => this.setState({ hidden: false }));
  }

  render() {
    return (
      <div ref="timeLineData" className={'timeLineData' + (this.state.hidden ? ' hidden' : '')}>
        {
          this.props.withTitles && 
          <div className="titles">
            <span>Liberalismo</span>
            <span>Neoliberalismo</span>
          </div>
        }
        <div className="data">
          <div className={this.props.liberalism ? '' : 'empty'}>
            {
              this.props.liberalism &&
              <div>
                <h3>{this.props.liberalism.year}</h3>
                {this.props.liberalism.text}
              </div>
            }
          </div>
          <div className={(this.props.neoliberalism ? '' : 'empty') + (this.props.liberalism ? '' : ' bordered')}>
            {
              this.props.neoliberalism &&
              <div>
                <h3>{this.props.neoliberalism.year}</h3>
                {this.props.neoliberalism.text}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

let objectShape = PropTypes.shape({
  year: PropTypes.number.isRequired,
  text: PropTypes.arrayOf(PropTypes.node).isRequired
})

TimeLineData.propTypes = {
  withTitles: PropTypes.bool,
  liberalism: objectShape,
  neoliberalism: objectShape
}

export default TimeLineData;