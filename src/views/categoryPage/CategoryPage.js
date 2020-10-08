import React, { useState, useEffect } from "react"
import "./CategoryPage.scss"
import { parse } from "query-string"
import { Container, Row, Col } from "reactstrap"
import { useParams, useHistory, useLocation } from "react-router-dom"
import api from "../../api/wooCommerce"
import Card from "../../components/card/Card"
import filters from "../../constants/fliters"
import LoadingScreen from "../../components/loadingScreen/LoadingScreen"

const CategoryPage = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const history = useHistory()
  const order = parse(useLocation().search).order || "asc"
  const orderby = parse(useLocation().search).orderby || "date"
  const pathname = useLocation().pathname
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get("products", {
      category: id,
      orderby,
      order
    })
      .then(response => {
        setProducts([...response.data])
        setLoading(false)
      })    
  }, [id, orderby, order])



  const handleChange = e => {
    if (e.target.checked)
      history.push(`${pathname}?${e.target.value}`)
    else
      history.push(`${pathname}`)
  }

  return (
    <Container>
      {
        loading && <LoadingScreen />
      }      
      <Row className="category">
        <Col xs={12} lg={3}>
          <div className="filters">
            <h3>فیلتر ها</h3>
            {
              filters.map(filter => (
                <div key={filter.value} className="filter">
                  <input
                    type="radio"
                    onChange={handleChange}
                    value={filter.value}
                    name="filter"
                  />
                  <label htmlFor={filter.title}>{filter.title}</label>
                </div>
              ))
            }
          </div>
        </Col>
        <Col xs={12} lg={9}>
          <Row>
            {
              products.map(product => (
                <Col xs={12} md={4} lg={3} key={product.id}>
                  <Card
                    imageSrc={product.images[0].src}
                    title={product.name}
                    regularPrice={product.regular_price}
                    price={product.price}
                    id={product.id}
                  />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default CategoryPage