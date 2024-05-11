import React from 'react'

const Input = ({type, className, placeholder, onChange, name, value}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} name={name} onChange={onChange} value={value}/>
  )
}

export default Input