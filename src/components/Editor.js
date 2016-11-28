import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTextArea: 'Welcome',
    };
  }
  componentDidMount() {

  }
  renderText() {
    if (this.state) {
      return this.state.valueTextArea;
    }
  }
  render() {
    return (
      <div className="container-editor">
        <textarea disabled ref={(editor) => this.editor = editor} className="editor">
          <span>{this.renderText()}</span>
        </textarea>
      </div>
    );
  }
}

export default Editor;
