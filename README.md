# custom-input-slider

`InputSlider` is a React component allowing users to input numeric values. It will accept a single value as of now. By default, basic styles are applied, but can be overridden depending on your design requirements.

## Demo
Demo is available [here](https://sivaramakrishnatumma.github.io/reactinputslider/).

## Installation

1. Install `react-input-range` using npm (or [yarn]). `npm install react-input-range`
2. Import `react-input-range` to use `InputRange` component.
3. Optionally, import `react-input-range/lib/css/index.css` if you want to apply the default styling.

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './Slider';

class App extends React.Component {
  constructor(props) {
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
      <Slider options={this.state.options} onChange={this.valueChanged}></Slider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Development

If you want to work on this project locally, you need to grab all of its dependencies, for which 
we recommend using [yarn]. You can find the instructions to setup yarn [here](https://yarnpkg.com/docs/install).
```
yarn install
```

After that, you should be able run to preview
```
yarn dev
```

To test
```
yarn test
```

Contributions are welcome. :)

[yarn]: https://yarnpkg.com/