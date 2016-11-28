import React, { Component } from 'react';
import Canvas from './Canvas';
import Editor from './Editor';

class HomePage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Canvas />
        <Editor />
      </div>
    );
  }
}

export default HomePage;
