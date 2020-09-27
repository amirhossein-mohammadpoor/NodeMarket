import React, { useState } from "react"
import "./CoordinatePage.scss"
import { Container, Row, Col } from "reactstrap"
import { Map, TileLayer, Marker } from "react-leaflet"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import { editUserProfile } from "../../../redux/actions/userActions"
import { connect, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const CoordinatePage = ({ editUserProfile }) => {
  const [position, setPosition] = useState([])
  const history = useHistory()
  const token = useSelector(state => state.user.token)
  const USER = useSelector(state => state.user.users.filter(
    user => user.email === token
  ))[0]

  const handlePositon = () => {
    if (position.length) {
      const user = {
        ...USER,
        position
      }
      editUserProfile(user)
      history.push("/user/profile")
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <p>
            لطفا موقعیت دقیق آدرس تحویل گیرنده سفارش خود را بر روی نقشه مشخص کنید</p>
          <span>موقعیت شما روی نقشه:</span>
          <SubmitButton
            onClick={handlePositon}
            style={{ width: "100%" }}
          >
            تایید موقعیت
          </SubmitButton>
        </Col>
        <Col xs={12} lg={6}>
          <Map
            center={[35.6892, 51.3890]}
            zoom={13}
            onClick={e => setPosition([e.latlng.lat, e.latlng.lng])}
            zoomControl={true}
            doubleClickZoom={false}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              position.length !== 0 ?
                <Marker position={position} />
                :
                null
            }
          </Map>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(null, { editUserProfile })(CoordinatePage)