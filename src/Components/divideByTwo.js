import React from 'react';
import './button.css';

const DivideByTwo = (props) => {
  return (
    <button className='dividebytwo' onClick={props.divide}>/2</button>
  )
}

export default DivideByTwo;
