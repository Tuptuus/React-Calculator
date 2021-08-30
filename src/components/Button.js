import React from 'react'
import './Button.css'

const Button = (props) => {
  const number = props.title
  return (  
    <button onClick={()=>props.click(number)}>{props.title}</button>
  );
}
 
export default Button;