import React, { Component } from 'react';
import '../css/Img.css';

class Img extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div className="img">
        {
          this.state.open &&
          <div onClick={this.handleClose} className="modal">
            <img onClick={this.handleOpen} src={this.props.src} alt=""/>
          </div>
        }
        <img onClick={this.handleOpen} {...this.props} alt=""/>
      </div>
    );
  }
}

export default Img; 