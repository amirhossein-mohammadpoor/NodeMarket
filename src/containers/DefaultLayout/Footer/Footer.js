import React from "react"
import "./Footer.scss"
import { Row, Col, Container } from "reactstrap"
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="p-0">
          <Col xs={6} xl={2}>
            <h5>نودمارکت</h5>
            <ul>
              <li>بلاگ نودمارکت</li>
              <li>درباره نودمارکت</li>
              <li>تماس با ما</li>
              <li>همکاری با ما</li>
              <li>ثبت نام سوپر مارکت</li>
            </ul>
          </Col>
          <Col xs={6} xl={2}>
            <h5>تماس با ما</h5>
            <ul>
              <li>حساب کاربری</li>
              <li>تاریخچه سفارشات</li>
              <li>شرایط حمل و نقل</li>
              <li>شرایط مرجوعی</li>
              <li>حریم خصوصی</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} xl={4}>
            <h5>مشتریان</h5>
            <div>
              <FaMapMarker style={{ color: "green", marginLeft: "5px" }} />
              <span className="address">
                تهران - شهرک غرب، بلوار فرحزادی، خیابان حافظی، پلاک 48، واحد 8
              </span>
            </div>
            <div className="phone-number">
              <span>02x-xx243xx</span>
              <FaPhone />
            </div>
            <div className="email">
              <span>info@nodemarket.com</span>
              <FaEnvelope />
            </div>
          </Col>
          <Col xs={12} sm={6} xl={4}>
            <h5>اطمینان از خرید</h5>
            <div>
              <img src="/assets/images/logo-e.jpg" width="33%" alt="" />
              <img src="/assets/images/logo-k.jpg" width="33%" alt="" />
              <img src="/assets/images/logo-s.jpg" width="33%" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copywrite">
        &copy;کلیه حقوق این سایت محفوظ می باشد.
      </div>
    </footer>
  )
}

export default Footer