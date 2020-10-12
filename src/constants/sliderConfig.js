import React from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const MainNextArrow = props => {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
    >
    </div>
  )
}
const MainPrevArrow = props => {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
    >
    </div>
  )
}

const NextArrowStyle = {
  fontSize: "30px",
  display: "inline",
  padding: "40px 0px",
  lineHeight: "0",
  position: "absolute",
  top: "50%",
  right: "-15px",
  transform: "translateY(-50%)",
  cursor: "pointer"  
}
const PrevArrowStyle = {
  fontSize: "30px",
  display: "inline",
  padding: "40px 0px",
  lineHeight: "0",
  position: "absolute",
  top: "50%",
  left: "-15px",
  zIndex: "12",
  transform: "translateY(-50%)",
  cursor: "pointer"
}

const ProductNextArrow = props => {
  const { onClick } = props
  return (
    <div
      style={NextArrowStyle}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  )
}
const ProductPrevArrow = props => {

  const { onClick } = props
  return (
    <div
      style={PrevArrowStyle}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  )
}

const mainSliderSettings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  rtl: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <MainNextArrow />,
  prevArrow: <MainPrevArrow />
}

const productsSliderSettings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: false,
  swipe: false,
  nextArrow: <ProductNextArrow />,
  prevArrow: <ProductPrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}

const relatedPicturesSliderSettings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: false,
  swipe: false,
  nextArrow: <ProductNextArrow />,
  prevArrow: <ProductPrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
}

const relatedProductsSliderSetting = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
  nextArrow: <ProductNextArrow />,
  prevArrow: <ProductPrevArrow />
}

export {
  mainSliderSettings,
  productsSliderSettings,
  relatedProductsSliderSetting,
  relatedPicturesSliderSettings
} 