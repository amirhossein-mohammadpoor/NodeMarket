import React from "react"
import "./Input.scss"

const Input = ({ onChange, value, placeholder, textLeft}) => (
    <div className="input">
      <span>{placeholder}</span>      
      <input
        onChange={onChange}
        value={value}
        className="input"
        style={{ direction: textLeft ? "ltr" : "rtl" }}
      />
    </div>
  )

export default Input