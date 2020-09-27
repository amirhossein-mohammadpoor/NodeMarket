import React, { useEffect, useState } from "react"
import "./UserFavorites.scss"
import { FaHeartBroken } from "react-icons/fa"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { user } from "../../../redux/selectors/userSelectors"
import { createStructuredSelector } from "reselect"
import api from "../../../api/wooCommerce"
import Card from "../../../components/card/Card"
import { Spinner } from "reactstrap"

const UserFavorites = ({ user }) => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user.favorites.length) {
      api.get("products", {
        include: user.favorites
      })
        .then(response => {
          setFavorites([...response.data])

          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [user, loading])

  return (
    <div className="favorites">
      <Row>
        {
          loading &&
          <div className="spinner">
            <Spinner />
          </div>
        }
        {
          user.favorites.length === 0 &&
          <h2>هیچ علاقه مندی پیدا نشد <FaHeartBroken color="red" /></h2>
        }
        {
          favorites.map(f => (
            <Col xs={12} sm={6} lg={4} key={f.id}>
              <Card
                imageSrc={f.images[0].src}
                title={f.name}
                regularPrice={f.regular_price}
                price={f.price}
                id={f.id}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user
})

export default connect(mapStateToProps, null)(UserFavorites)