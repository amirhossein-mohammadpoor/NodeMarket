import React from "react"
import "./LoadingScreen.scss"
import { Spinner } from "reactstrap"

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Spinner style={{ color: "green", width: "50px", height: "50px" }} />
    </div>
  )
}

export default LoadingScreen