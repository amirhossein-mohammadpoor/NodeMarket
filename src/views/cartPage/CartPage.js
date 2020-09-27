import React from "react"
import "./CartPage.scss"
import SubmitButton from "../../components/buttons/submitButton/SubmitButton"
import { useHistory } from "react-router-dom"
import { Container } from "reactstrap"
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"
import { connect, useSelector } from "react-redux"
import { userProducts } from "../../redux/selectors/cartSelector"
import { createStructuredSelector } from "reselect"
import { removeItem, incrementItem, decrementItem } from "../../redux/actions/cartActions"
import { NavLink } from "react-router-dom"

const CartPage = props => {
  const history = useHistory()
  const token = useSelector(state => state.user.token)
  const { userProducts, removeItem, incrementItem, decrementItem } = props

  return (
    <div className="cart-page">
      <div className="return-button">
        <SubmitButton onClick={() => history.goBack()}>
          بازگشت به صفحه قبل
        </SubmitButton>
      </div>
      {
        userProducts.length === 0 ? 
          <h1>سبد کالا خالی است <span style={{ color: "red" }}>:(</span></h1>
          :
          <Container>
            <table>
              <thead>
                <tr>
                  <th>نام محصول</th>
                  <th>تعداد</th>
                  <th>قیمت</th>
                  <th>اعمال تغییر</th>
                </tr>
              </thead>
              <tbody>
                {
                  userProducts.map(product => (
                    <tr key={product.productId}>
                      <td>{product.productName}</td>
                      <td>{product.number}</td>
                      <td>{Number(product.productPrice) * product.number} تومان</td>
                      <td>
                        <button
                          className="add"
                          onClick={() => incrementItem(token, product.productId)}
                        >
                          <FaPlus />
                        </button>
                        {
                          product.number !== 1 ?
                            <button
                              className="remove"
                              onClick={() => decrementItem(token, product.productId)}
                            >
                              <FaMinus />
                            </button>
                            :
                            <button
                              className="remove"
                              onClick={() => removeItem(token, product.productId)}
                            >
                              <FaTrash />
                            </button>
                        }
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="submit">
              <NavLink to="/checkout">
                <SubmitButton>نهایی کردن سفارش</SubmitButton>
              </NavLink>
            </div>
          </Container>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  userProducts
})

export default connect(mapStateToProps, { removeItem, incrementItem, decrementItem })(CartPage)