import React from 'react';
import './button.css';

const Plustwo = (props) => {
  return (
    <button className='plustwo' onClick={props.increaseTwo}>+2</button>
  )
}

export default Plustwo;
