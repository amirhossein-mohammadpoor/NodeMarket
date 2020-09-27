import React, { useState } from "react"
import "./FloatButton.scss"
import { CSSTransition } from "react-transition-group"

const FloatButton = () => {
  const [showFloatButton, setShowFloatButton] = useState(false)
  const timeout = {
    enter: 1,
    exit: 300
  }
  
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 200)
      setShowFloatButton(true)
    else
      setShowFloatButton(false)

  }

  return (
    <CSSTransition
      in={showFloatButton}
      timeout={timeout}
      unmountOnExit
      classNames="float-button"
    >
      <button
        className={`float-button`}
        onClick={() => window.scrollTo(0, 0)}
      >
        &#8593;
      </button>
    </CSSTransition>
  )
}

export default FloatButton