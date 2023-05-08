import React from 'react'
import "./CardModule.css"

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>{props.children}</div>
  )
}

export default Card