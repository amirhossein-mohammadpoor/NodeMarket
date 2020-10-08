import React, { useState, useEffect } from "react"
import "./LandingPage.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container, Spinner } from "reactstrap"
import FloatButton from "../../components/buttons/floatButton/FloatButton"
import api from "../../api/wooCommerce"
import Slider from "react-slick"
import { mainSliderSettings, productsSliderSettings } from "../../constants/sliderConfig"
import Card from "../../components/card/Card"

const LandingPage = () => {
  const [newestProducts, setNewestProducts] = useState([])
  const [cheapProducts, setCheapProducts] = useState([])
  const [expoensiveProducts, setExpensiveProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    api.get("products", {
      orderby: "date"
    })
      .then(response => {
        setNewestProducts([...response.data])
      })
    api.get("products", {
      order: "asc",
      orderby: "price"
    })
      .then(response => {
        setCheapProducts([...response.data])
      })
    api.get("products", {
      order: "desc",
      orderby: "price"
    })
      .then(response => {
        setExpensiveProducts([...response.data])
      })
    api.get("products", {
      orderby: "rating"
    })
      .then(response => {
        setPopularProducts([...response.data])
      })
  }, [])

  return (
    <React.Fragment>
      <Container fluid="md" className="px-0">
        <FloatButton />
        <Slider {...mainSliderSettings}>
          <div>
            <img
              src="/assets/images/1.jpg"
              alt="slide1"
              width="100%"
            />
          </div>
          <div>
            <img
              src="/assets/images/2.jpg"
              alt="slide2"
              width="100%"
            />
          </div>
        </Slider>
      </Container>
      <Container className="landing-page">
        <h3>جدید ترین ها</h3>
        <Slider {...productsSliderSettings}>
          {
            newestProducts.length !== 0 ?
              newestProducts.map(product => (
                <Card
                  key={product.id}
                  title={product.name}
                  imageSrc={product.images[0].src}
                  regularPrice={product.regular_price}
                  price={product.price}
                  id={product.id}
                />
              ))
              :
              <div><Spinner /></div>
          }
        </Slider>
        <h3>ارزان ترین ها</h3>
        <Slider {...productsSliderSettings}>
          {
            cheapProducts.length !== 0 ?
              cheapProducts.map(product => (
                <Card
                  key={product.id}
                  title={product.name}
                  imageSrc={product.images[0].src}
                  regularPrice={product.regular_price}
                  price={product.price}
                  id={product.id}
                />
              ))
              :
              <div><Spinner /></div>
          }
        </Slider>
        <h3>گرانترین ها</h3>
        <Slider {...productsSliderSettings}>
          {
            expoensiveProducts.length !== 0 ?
              expoensiveProducts.map(product => (
                <Card
                  key={product.id}
                  title={product.name}
                  imageSrc={product.images[0].src}
                  regularPrice={product.regular_price}
                  price={product.price}
                  id={product.id}
                />
              ))
              :
              <div><Spinner /></div>
          }
        </Slider>
        <h3>محبوب ترین ها</h3>
        <Slider {...productsSliderSettings}>
          {
            popularProducts.length !== 0 ?
              popularProducts.map(product => (
                <Card
                  key={product.id}
                  title={product.name}
                  imageSrc={product.images[0].src}
                  regularPrice={product.regular_price}
                  price={product.price}
                  id={product.id}
                />
              ))
              :
              <div><Spinner /></div>
          }
        </Slider>
      </Container>
    </React.Fragment>
  )
}

export default LandingPage