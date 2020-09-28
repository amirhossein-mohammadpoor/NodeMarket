import React, { useState, useEffect } from "react"
import "./Header.scss"
import Logo from "../../../components/logo/Logo"
import SearchBox from "../../../components/searchBox/SearchBox"
import DefaultButton from "../../../components/buttons/defaultButton/DefaultButton"
import { FaHome, FaUser, FaCartPlus } from 'react-icons/fa'
import SideMenu from "../../../components/sideMenu/SideMenu"
import { NavLink } from "react-router-dom"
import { Row, Col } from "reactstrap"
import { user } from "../../../redux/selectors/userSelectors"
import { totalItems } from "../../../redux/selectors/cartSelector"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import ButtonTag from "../../../components/buttonTag/ButtonTag"
import api from "../../../api/wooCommerce"
import { useLocation } from "react-router-dom"

const Header = props => {
  const buttonTextStyle = {
    marginRight: "5px",
    fontSize: "14px"
  }
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [searching, setSearching] = useState(false)
  const pathname = useLocation().pathname

  const handleSearch = e => {
    setSearch(e.target.value)
    if (e.target.value) {
      setSearching(true)
      api.get("products", {
        search: e.target.value
      }).then(response => {        
        setSearchResult([...response.data])
        setSearching(false)
      })
    } else {
      setSearchResult([])
    }
  }

  useEffect(() => {
    setSearch("")
  }, [pathname])

  return (
    <header>
      <Row className="mr-0">
        <Col xs={12} lg={6} className="header-right mb-3 mb-lg-0">
          <div className="logo-wrapper d-none d-lg-block">
            <Logo />
          </div>
          <div className="searchbox-wrapper">
            <SearchBox
              onChange={handleSearch}
              value={search}
              placeholder="جستجو کنید..."              
            />
            {
              search &&
              <div className="result">
                {
                  !searching && 
                  searchResult.map(r => (
                    <div key={r.id}>
                      <NavLink to={`/product/${r.id}/${r.name}`}>
                        <img src={r.images[0].src}  alt=""/>
                        <span>{r.name}</span>                        
                      </NavLink>
                    </div>
                  ))
                }{
                  searching && 
                  <div>در حال جستجو...</div>
                }
              </div>
            }
          </div>
        </Col>
        <Col xs={12} lg={6} className="header-left">
          <div
            style={{ marginLeft: "5px" }}
            className="d-inline d-lg-none"
          >
            <NavLink to="/">
              <DefaultButton>
                <FaHome />
              </DefaultButton>
            </NavLink>
          </div>
          <NavLink to="/account/signin" style={{ marginLeft: "5px" }} >
            <DefaultButton>
              <FaUser />
              <span
                style={buttonTextStyle}
                className="d-lg-block d-none"
              >
                {
                  props.user.length === 0 ?
                    "ورود به حساب کاربری"
                    :
                    `${props.user.name} ${props.user.lastName}`
                }
              </span>
            </DefaultButton>
          </NavLink>
          <NavLink to="/cart">
            <div style={{ position: "relative", height: "100%" }}>
              <ButtonTag number={props.totalItems} />
              <DefaultButton>
                <FaCartPlus />
              </DefaultButton>
            </div>
          </NavLink>
        </Col>
        <Col xs={12}>
          <SideMenu />
        </Col>
      </Row>
      
    </header>
  )
}

const mapStateToProps = createStructuredSelector({
  user,
  totalItems
})

export default connect(mapStateToProps, null)(Header)