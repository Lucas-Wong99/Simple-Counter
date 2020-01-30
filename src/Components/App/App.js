import React from 'react';
import './App.css';

import Counter from '../Counter/Counter';
import Plus from '../pluscount';
import Minus from '../minuscount';
import Plustwo from '../plustwo';
import Minustwo from '../minustwo';
import MultiplyByTwo from '../multiplyByTwo';
import DividebyTwo from '../divideByTwo';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { counter: 0 };

    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
    this.increaseTwo = this.increaseTwo.bind(this)
    this.decreaseTwo = this.decreaseTwo.bind(this)
    this.multiply = this.multiply.bind(this)
    this.divide = this.divide.bind(this)
  }

  increaseCount() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseCount() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  increaseTwo() {
    this.setState({
      counter: this.state.counter + 2
    })
  }

  decreaseTwo() {
    this.setState({
      counter:this.state.counter - 2
    })
  }

  multiply() {
    this.setState({
      counter: this.state.counter * 2
    })
  }

  divide() {
    this.setState({
      counter: this.state.counter / 2
    })
  }

  render() {
    return (
      <div className='app'>
        <Counter count={this.state.counter}/>
        <div className='buttons'>
          <Plustwo count={this.state.counter} increaseTwo={this.increaseTwo}/>
          <Plus count={this.state.counter} increaseCount={this.increaseCount}/>
          <Minus count={this.state.counter} decreaseCount={this.decreaseCount}/>
          <Minustwo count={this.state.counter} decreaseTwo={this.decreaseTwo}/>
        </div>
        <div className='multanddiv'>
          <MultiplyByTwo count={this.state.counter} multiply={this.multiply}/>
          <DividebyTwo count={this.state.counter} divide={this.divide}/>
        </div>
      </div>
    )
  }
};


export default App;
