import React, { useState, useEffect } from "react"
import "./ProductViewPage.scss"
import SubmitButton from "../../components/buttons/submitButton/SubmitButton"
import { Container, Row, Col } from "reactstrap"
import Modal from "../../components/modal/Modal"
import { useParams, useLocation } from "react-router-dom"
import api from "../../api/wooCommerce"
import Slider from "react-slick"
import { relatedProductsSliderSetting, productsSliderSettings } from "../../constants/sliderConfig"
import Card from "../../components/card/Card"
import { Spinner } from "reactstrap"
import { FaStar, FaShare, FaTrash } from "react-icons/fa"
import { HiOutlineHeart, HiHeart } from "react-icons/hi"
import { useHistory } from "react-router-dom"
import { connect, useSelector } from "react-redux"
import { addItem, incrementItem, decrementItem, removeItem } from "../../redux/actions/cartActions"
import { userProducts } from "../../redux/selectors/cartSelector"
import { user } from "../../redux/selectors/userSelectors"
import { createStructuredSelector } from "reselect"
import LoadingScreen from "../../components/loadingScreen/LoadingScreen"
import { addToFavorites, removeFromFavorites } from "../../redux/actions/userActions"

const ProductViewPage = props => {
  const {
    userProducts,
    user,
    addItem,
    incrementItem,
    decrementItem,
    removeItem,
    addToFavorites,
    removeFromFavorites
  } = props
  const { id } = useParams()
  const location = useLocation()
  const [product, setProduct] = useState({
    name: "",
    imageSrc: [],
    regularPrice: "",
    price: "",
    totalSales: 0,
    points: "",
    stock: "",
    relatedIds: []
  })
  const [loading, setLoading] = useState(false)
  const [relatedProducts, setRelatedProdutcs] = useState([])
  const [image, setImage] = useState("")
  const history = useHistory()
  const token = useSelector(state => state.user.token)
  const currentProduct = userProducts.find(product => product.productId === id)
  const number = currentProduct ? currentProduct.number : 0
  let isFavorite = false
  if (user.favorites) {
    isFavorite = !!user.favorites.find(f => f === id)
  }

  const handleAddToCart = () => {
    if (!token)
      return history.push("/account/signin")

    const CART = {
      email: token,
      products: [{
        productId: id,
        productName: product.name,
        productPrice: product.price,
        number: 1
      }]
    }

    addItem(CART)
  }
  const handleChangeImage = src => {
    setImage(src)
  }
  const handlePlus = () => {
    if (!token)
      return history.push("/account/signin")

    incrementItem(token, id)
  }
  const handleMinus = () => {
    if (!token)
      return history.push("/account/signin")

    decrementItem(token, id)
  }
  const handleRemove = () => {
    if (!token)
      return history.push("/account/signin")

    removeItem(token, id)
  }
  const handleAddFavorite = () => {
    if (!token)
      return history.push("/account/signin")

    addToFavorites(token, id)
  }
  const handleRemoveFavorite = () => {
    if (!token)
      return history.push("/account/signin")

    removeFromFavorites(token, id)
  }

  const ModalButtonComponent = () => {
    return (
      < div className="share-product" >
        <span><FaShare color="blue" /> این محصول را به اشتراک بگذارید</span>
      </div >
    )
  }
  const ModalContent = () => (
    <React.Fragment>
      <p>با استفاده از روش‌های زیر می‌توانید این صفحه را با دوستان خود به اشتراک بگذارید.</p>
      <div className="share-buttons">
        <a
          href={`https://telegram.me/share/url?url=http://localhost${location.pathname}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="telegram-button">Telegram</button>
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=http://localhost${location.pathname}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-button">WhatsApp</button>
        </a>
      </div>
    </React.Fragment>
  )
  useEffect(() => {
    setLoading(true)
    api.get(`products/${id}`)
      .then(product => {
        const ID = product.data.id
        const array = product.data.related_ids
        setImage(product.data.images[0].src)
        setProduct({
          name: product.data.name,
          description: product.data.description,
          imageSrc: product.data.images,
          regularPrice: product.data.regular_price,
          price: product.data.price,
          totalSales: product.data.total_sales,
          points: product.data.average_rating,
          stockQuantity: product.data.stock_quantity,
          relatedIds: product.data.related_ids
        })
        api.get("products", {
          include: array.filter(id => id !== ID)
        })
          .then(response => {
            setRelatedProdutcs([...response.data])
            setLoading(false)
            document.documentElement.scrollTo(0, 0)
          })
      })
  }, [id])

  return (
    <React.Fragment>
      <Container>
        {
          loading && <LoadingScreen />
        }
        <Row className="product-view px-3">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            {
              product.imageSrc ?
                <div>
                  <img src={image} alt="" />
                  <Slider {...productsSliderSettings}>
                    {
                      !loading ? 
                        product.imageSrc.map(img => (
                          <div
                            key={img}
                            onMouseUp={() => handleChangeImage(img.src)}
                            className="image-nav"                    
                          >
                            <img src={img.src} alt="" />
                          </div>                        
                        ))
                        :
                        <div className="spinner"><Spinner /></div>
                    }
                  </Slider>
                </div>
                :
                <div className="spinner"><Spinner /></div>
            }
          </Col>
          <Col xs={12} lg={6} className="add-to-cart-field py-3">
            <h4>{product.name}</h4>
            <p><FaStar color="gold" /> امتیاز: <span>{product.points}</span></p>
            <p>کل فروش: <span>{product.totalSales}</span></p>
            <p>موجودی: <span>{product.stockQuantity || 0}</span></p>
            <h5>توضیحات:</h5>
            <span dangerouslySetInnerHTML={{ __html: product.description }}></span>
            {
              isFavorite ?
                <div className="add-to-favorites" onClick={handleRemoveFavorite}>
                  <span>
                    <HiHeart color="red" />
                    حذف کردن از علاقه مندی ها
                  </span>
                </div>
                :
                <div className="add-to-favorites" onClick={handleAddFavorite}>
                  <span>
                    <HiOutlineHeart color="red" />
                    اضافه کردن به علاقه مندی ها
                  </span>
                </div>
            }
            <Modal
              title="اشتراک گذاری"
              modalButtonComponent={<ModalButtonComponent />}
            >
              <ModalContent />
            </Modal>
            <div className="price-field">
              <span>قیمت مصرف کننده:</span>
              <span className="regular-price">{`${product.regularPrice} تومان`}</span>
              <span className="price">{`${product.price} تومان`}</span>
            </div>
            {
              number === 0 &&
              <SubmitButton
                onClick={handleAddToCart}
              >
                افزودن به سبد خرید
              </SubmitButton>
            }
            {
              number > 0 &&
              <div className="edit-number">
                <button className="plus" onClick={handlePlus}>+</button>
                <span className="number">{number}</span>
                {
                  number > 1 &&
                  <button className="minus" onClick={handleMinus}>-</button>
                }
                {
                  number === 1 &&
                  <button className="minus" onClick={handleRemove}><FaTrash /></button>
                }
              </div>
            }
          </Col>
        </Row>
        <div className="related-products">
          <h2>محصولات مرتبط</h2>
          <Slider {...relatedProductsSliderSetting}>
            {
              relatedProducts.length !== 0 ?
                relatedProducts.map(product => (
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
                <div className="spinner"><Spinner /></div>
            }
          </Slider>
        </div>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  userProducts,
  user
})

export default connect(mapStateToProps, {
  addItem,
  incrementItem,
  decrementItem,
  removeItem,
  addToFavorites,
  removeFromFavorites
})(ProductViewPage)