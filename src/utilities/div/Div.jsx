import React from 'react'

const Div = ({className, children, style}) => {
  return (
    <div className={className} style={style}>{children}</div>
  )
}

export default Div