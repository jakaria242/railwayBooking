import React from 'react'

const Button = ({className, text, onClick, type}) => {
  return (
    <button onClick={onClick} className={className} type={type}>{text}</button>
  )
}

export default Button