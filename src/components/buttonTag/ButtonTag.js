import React from "react"
import "./ButtonTag.scss"

const ButtonTag = ({number}) => {
  if (number)
    return (
      <div
        className="button-tag"
      >
        <span>{number}</span>
      </div>
    )
  return (null)
}

export default ButtonTag