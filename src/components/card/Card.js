import React from "react"
import "./Card.scss"
import SubmitButton from "../buttons/submitButton/SubmitButton"
import { NavLink } from "react-router-dom"

const Card = props => {
  const { 
    imageSrc,
    regularPrice,
    price,
    id,
    title
  } = props  


  return (
    <div className="product-card">
      <NavLink to={`/product/${id}`}>
        <img
          src={imageSrc}
          alt=""
        />
        <div className="price-tag">
          <p className="title">{title}</p>
          <span className="regular-price">{regularPrice} تومان</span>
          <span className="price">{price} تومان</span>
        </div>
        <SubmitButton
          style={{ width: "100%" }}
        >
          بررسی بیشتر
        </SubmitButton>
      </NavLink>
    </div>
  )
}

export default Card