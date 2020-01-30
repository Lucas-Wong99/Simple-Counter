import React from 'react';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className='counter'>
      <h2>Count: {props.count}</h2>
    </div>
  )
}

export default Counter;
