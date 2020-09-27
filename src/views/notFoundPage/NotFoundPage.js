import React from "react"
import "./NotFoundPage.scss"
import { useLocation } from "react-router-dom"

const NotFoundPage = () => {
  const location = useLocation()

  return (
    <div className="not-found-page">
      <h1>صفحه <span>{location.pathname}</span> یافت نشد!</h1>
    </div>
  )
}

export default NotFoundPage