import React from "react"
import "./ToggleButton.scss"

const ToggleButton = ({ children, onClick, style, toggle }) => {
  
  return (
    <button 
      className={`toggle-button ${ toggle ? "toggle-button-active" : null }`}
      style={style}
      onClick={onClick}
    >
      {
        children
      }
    </button>
  )
}

export default ToggleButton