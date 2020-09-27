import React from "react"
import "./SubmitButton.scss"

const SubmitButton = ({ children, onClick, style, className }) => {
  return (
    <button
      style={style}
      onMouseUp={onClick}
      className={`submit-button ${className}`}
    >
      {
        children
      }
    </button>
  )
}

export default SubmitButton