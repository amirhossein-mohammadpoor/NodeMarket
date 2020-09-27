import React, { useState } from "react"
import "./CheckoutPage.scss"
import SubmitButton from "../../components/buttons/submitButton/SubmitButton"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { userProducts } from "../../redux/selectors/cartSelector"
import { user } from "../../redux/selectors/userSelectors"
import { useHistory } from "react-router-dom"
import { submitOrder } from "../../redux/actions/userActions"
import { emptyCart } from "../../redux/actions/cartActions"
import { NavLink } from "react-router-dom"

const CheckoutPage = ({ userProducts, user, submitOrder, emptyCart }) => {
  const credit = user.credit
  let price = 0
  for (let p of userProducts)
    price += p.number * Number(p.productPrice)
  const total = credit - price
  const history = useHistory()
  const [notEnoughCredit, setNotEnoughCredit] = useState(false)

  const handleSubmit = () => {
    if (total < 0)
      return setNotEnoughCredit(true)

    const order = {
      products: userProducts,
      date: new Date().toLocaleString()
    }

    submitOrder(user.email, order, price)
    emptyCart(user.email)
    history.push("/user/orders")
  }

  return (
    <div className="checkout-wrapper">
      <div className="checkout-content">
        <div className="cash">
          <span>موجودی</span>
          <span>{credit} تومان</span>
        </div>
        <div className="price">
          <span>هزینه کل محصولات</span>
          <span>{price} تومان</span>
        </div>
        <div className="total">
          <span>اعتبار باقی مانده</span>
          {
            total < 0 &&
            <span style={{ color: "red" }}>تومان {total}</span>
          }
          {
            total >= 0 &&
            <span style={{ color: "blue" }}>تومان {total}</span>
          }
        </div>
        {
          notEnoughCredit && 
          <div className="not-enough-credit">
            اعتبار شما کافی نیست برای افزایش اعتبار <NavLink to="/user/credit">لینک+</NavLink> را کلیک کنید
          </div>
        }
        <SubmitButton
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          ارسال سفارش
        </SubmitButton>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user,
  userProducts
})

export default connect(mapStateToProps, { submitOrder, emptyCart })(CheckoutPage)