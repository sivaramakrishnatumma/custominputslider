import React, { Component } from 'react';
import './Slider.css'

export class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {value: 0, styleName: 'linear-gradient(90deg, #d3617b 0%, #d3d3d3 0%)'};
    this.handleChange = this.handleChange.bind(this);
    this.moveBackgroundColor = this.moveBackgroundColor.bind(this);
  }

  componentDidMount(){
    this.setState({
        value: this.props.options.value | 0
    });
    this.moveBackgroundColor(this.props.options.value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options.value !== this.state.value) {
      this.setState({ value: nextProps.options.value | 0 });
      this.moveBackgroundColor(nextProps.options.value);
    }
  }

  handleChange(event) {
    console.log('Slider::handleChange::', event.target.value);
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
    this.moveBackgroundColor(event.target.value);
  }

  moveBackgroundColor(sliderValue){
    let sliderWidth = this.props.options.max - this.props.options.min;
    let widthInPercentage = ((sliderValue - this.props.options.min) * 100) / sliderWidth;
    this.state.styleName = 'linear-gradient(90deg, #d3617b ' + widthInPercentage + '%, #d3d3d3 0%)';
  }

  render() {
    return (
        <div>
            <input type="range" ref="slider" value={this.state.value} min={this.props.options.min} max={this.props.options.max} onChange={(e)=> this.handleChange(e)} className="slider" style={{ background: this.state.styleName }} id="myRange"></input>
        </div>
    );
  }
}

