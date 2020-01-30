import React from 'react';
import './button.css';

const Minus = (props) => {
  return (
    <button className='minus' onClick={props.decreaseCount}>-</button>
  )
}

export default Minus;
