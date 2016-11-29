import React, { Component } from 'react';

class Canvas extends Component {
  renderPixels() {
    const length = new Array(2730);
    const pixelNumber = Array.from(length.keys());

    const pixels = pixelNumber.map((e) => {
      return <div key={`pixel-${e}`} className={`pixel pixel-${e+1}`} />;
    });
    return pixels;
  }
  render() {
    return (
      <div className="canvas">
        {this.renderPixels()}
      </div>
    );
  }
}

export default Canvas;
