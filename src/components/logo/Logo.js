import React from "react"
import "./Logo.scss"
import { NavLink } from "react-router-dom"

const Logo = () => {
  return (
    <NavLink
      to="/"
      activeStyle={{
        textDecoration: "none"
      }}
    >
      <span className="logo">
        Node
        <i>Market</i>
      </span>
    </NavLink>
  )
}

export default Logo