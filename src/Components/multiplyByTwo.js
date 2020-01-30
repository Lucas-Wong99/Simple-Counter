import React from 'react';
import './button.css';

const MultiplyByTwo = (props) => {
  return (
    <button className='mulitiplybytwo' onClick={props.multiply}>x2</button>
  )
}

export default MultiplyByTwo;
