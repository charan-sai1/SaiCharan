import React from 'react'; 
import './gitbutton.css'; 

const GitButton = ({ text = 'Button', className = '' }) => { 
  return ( 
    <button className={`boton-elegante ${className}`}>{text}</button> 
  ); 
}; 

export default GitButton;