import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Slider} from './Slider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: {
        min: 0,
        max: 100,
        value: 50
      }
    }
    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(value) {
    let options = this.state.options;
    options.value = value;
    this.setState({ options: options})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Custom Input Range Slider Example</h1>
        </header>
        <div className="App-container">
          <Slider options={this.state.options} onChange={this.valueChanged}></Slider><br/>
          <span className="value">{this.state.options.value}</span>
        </div>
      </div>
    );
  }
}

export default App;
