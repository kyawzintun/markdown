import React, { Component } from 'react';
import './App.css';

import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.css'

class RawInput extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(e) {
    let value = e.target.value;
    this.props.updateValue(value);
  }

  render() {
    return (
      <textarea value={this.props.value} onChange={this.update} rows="22" type="text" className="form-control"></textarea>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Kyaw Zin Tun](https://www.linkedin.com/in/kyawzintun/)*'
    }

    this.rawInput = this.rawInput.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  rawInput(value) {
    let html = marked(value);
    return {__html:html};
  }

  updateValue(modifiedValue) {
     this.setState({value: modifiedValue});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="App-header">
            <h2>Markdown Previewer</h2>
            <hr className="star-dark" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RawInput value={this.state.value} updateValue={this.updateValue}/>
          </div>
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={this.rawInput(this.state.value)} />
          </div>
        </div>
        <div className="row">
          <div className="App-footer">
            <p>Coded by <a href="https://www.linkedin.com/in/kyawzintun/">KZT</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
