import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e4718c83690c27fdeb193e941f7fc7df5ca0db8fd17&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
