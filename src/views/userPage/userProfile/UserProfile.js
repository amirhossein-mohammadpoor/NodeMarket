import React from "react"
import "./UserProfile.scss"
import { Col, Row } from "reactstrap"
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { FaMapMarkedAlt } from "react-icons/fa"
import { user } from "../../../redux/selectors/userSelectors"
import { createStructuredSelector } from "reselect"

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h3>مشخصات فردی</h3>
      <Row>
        <Col xs={12} lg={6}>
          <p className="title">نام</p>
          <p>{user.name}</p>
          <p className="title">شماره تماس</p>
          <p>{user.number}</p>
        </Col>
        <Col xs={12} lg={6}>
          <p className="title">نام خانوادگی</p>
          <p>{user.lastName}</p>
          <p className="title">ایمیل</p>
          <p>{user.email}</p>
        </Col>
      </Row>
      <div className="edit-button">
        <NavLink to="/user/edit">
          <SubmitButton>ویرایش</SubmitButton>
        </NavLink>
      </div>
      <div className="add-address">
        <h3 >آدرس شما</h3>
        {
          user.position.length !== 0 ?
            <Map
              center={user.position}
              zoom={15}
              zoomControl={true}
              doubleClickZoom={false}
              scrollWheelZoom={false}
              dragging={false}
              animate={true}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={user.position}
                onMouseOver={(e) => {
                  e.target.openPopup();
                }}
                onMouseOut={(e) => {
                  e.target.closePopup();
                }}

              >
                <Popup>
                  <div className="marker-popup">
                    <FaMapMarkedAlt />
                    <span> موقعیت شما </span>
                  </div>
                </Popup>
              </Marker>
            </Map>
            :
            <h4>آدرسی ثبت نشده!</h4>
        }
        <NavLink to="/account/coordiante">
          <div className="d-flex justify-content-center mt-4">
            <SubmitButton>
              {
                user.position.length !== 0 ?
                  "تغییر آدرس"
                  :
                  "افزودن آدرس+"
              }
            </SubmitButton>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user
})

export default connect(mapStateToProps, null)(UserProfile)