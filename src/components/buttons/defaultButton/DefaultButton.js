import React from "react"
import "./DefaultButton.scss"

const DefaultButton = ({ children, click }) => {
  return (
    <button 
      onClick={click}
      className="default-button">
      {
        children
      }
    </button>
  )
}

export default DefaultButton