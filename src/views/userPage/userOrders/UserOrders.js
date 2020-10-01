import React from "react"
import "./UserOrders.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { user } from "../../../redux/selectors/userSelectors"
import { Col, Row } from "reactstrap"

const UserOrders = ({ user }) => {
  return (
    <div className="user-orders">
      <h4>لیست سفارش ها</h4>
      <div>
        {
          !user.orders &&
          <h2>هیچ سفارشی یافت نشد!</h2>
        }
        {
          user.orders.map(order => (
            <Row className="order-list" key={order}>
              <Col xs={12} sm={8}>
                <ul>
                  {
                    order.products.map(p => (
                      <li key={p.productId}>
                        <span>{p.productName}</span>
                        <span className="number">{p.number}</span>
                      </li>
                    ))
                  }
                </ul>
              </Col>
              <Col xs={12} sm={4} className="order-date mb-4 mb-sm-0">
                <span>{new Date(order.date).toLocaleDateString("fa-IR")}</span>
              </Col>
            </Row>
          ))
        }
    </div>
    </div >
  )
}

const mapStateToProps = createStructuredSelector({
  user
})

export default connect(mapStateToProps, null)(UserOrders)