import React from 'react';
import './button.css';

const Plus = (props) => {
  return (
    <button className='plus' onClick={props.increaseCount}>+</button>
  )
};

export default Plus;
