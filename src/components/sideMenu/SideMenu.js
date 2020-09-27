import React, { useState, useEffect } from "react"
import "./SideMenu.scss"
import Logo from "../../components/logo/Logo"
import { NavLink, useLocation } from "react-router-dom"
import DefaultButton from "../../components/buttons/defaultButton/DefaultButton"
import { Collapse } from "reactstrap"
import { FaList } from "react-icons/fa";

const SideMenu = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [hideDrawer, setHideDrawer] = useState(false)
  const location = useLocation().pathname
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const compareURL = (url1, url2) => {
    return url1 === url2
  }

  useEffect(() => {
    if (hideDrawer)
      setTimeout(() => {
        setShowDrawer(false)
        setHideDrawer(false)
      }, 300)
  }, [hideDrawer])

  return (
    <React.Fragment>
      <div
        style={{ display: "inline-block" }}
        className="d-inline-block d-lg-none"
        onClick={() => setShowDrawer(true)}
      >
        <div className="header-bottom">
          <DefaultButton>
            <FaList style={{color: "black"}} />            
          </DefaultButton>
        </div>
      </div>
      <div        
        className="d-none d-lg-block"
      >
        <div className="header-bottom">
          <ul className="nav">
            <NavLink to="/category/121">
              <li>آرایشی بهداشتی</li>
            </NavLink>
            <NavLink to="/category/52">
              <li>دیجیتال</li>
            </NavLink>
            <li className="dropdown">
              پوشاک
              <div className="dropdown-content">
                <NavLink to="/category/64">
                  <div>مردانه</div>
                </NavLink>
                <NavLink to="/category/63">
                  <div>زنانه</div>
                </NavLink>
              </div>
            </li>
            <NavLink to="/category/102">
              <li>ساعت و موچ بند هوشمند</li>
            </NavLink>
            <li className="dropdown">
              فرهنگی و هنری
              <div className="dropdown-content">
                <NavLink to="/category/77">
                  <div>فیلم</div>
                </NavLink>                
                <NavLink to="/category/79">
                  <div>کتاب و مجلات</div>
                </NavLink>
                <NavLink to="/category/76">
                  <div>کتاب و هنر</div>
                </NavLink>
              </div>
            </li>
            <NavLink to="/category/119">
              <li>فروش ویژه</li>
            </NavLink>
          </ul>
        </div>
      </div>
      {
        showDrawer ?
          <div className="side-menu">
            <div className="side-menu-bg"
              style={{ backgroundColor: hideDrawer ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.5)" }}
              onClick={() => setHideDrawer(true)}
            >
            </div>
            <div className="drawer-wrapper">
              <div className="drawer"
                style={{ transform: hideDrawer ? "translate(100%, 0)" : "translate(0, 0)" }}
              >
                <div className="drawer-header">
                  <div onClick={() => setHideDrawer(true)}>
                    <Logo />
                  </div>                  
                  <button className="dismiss"
                    onClick={() => setHideDrawer(true)}
                  >
                    &#8594;
                  </button>
                </div>
                <div className="drawer-body">
                  <NavLink
                    className={compareURL(location, "/category/121") ? "active" : null}
                    onClick={() => setHideDrawer(true)}
                    to="/category/121"
                  >
                    آرایشی بهداشتی
                  </NavLink>
                  <NavLink
                    className={compareURL(location, "/category/52") ? "active" : null}
                    onClick={() => setHideDrawer(true)}
                    to={"/category/52"}
                  >
                    دیجیتال
                  </NavLink>
                  <div>
                    <div
                      className="collapse-button"
                      onClick={() => setIsOpen1(!isOpen1)}
                    >
                      پوشاک
                    </div>
                    <Collapse isOpen={isOpen1}>
                      <NavLink
                        className={compareURL(location, "/category/63") ? "active" : null}
                        onClick={() => setHideDrawer(true)}
                        to={"/category/63"}
                      >
                        زنانه
                      </NavLink>
                      <NavLink
                        className={compareURL(location, "/category/64") ? "active" : null}
                        onClick={() => setHideDrawer(true)}
                        to={"/category/64"}
                      >
                        مردانه
                      </NavLink>
                    </Collapse>
                  </div>
                  <NavLink
                    className={compareURL(location, "/category/102") ? "active" : null}
                    onClick={() => setHideDrawer(true)}
                    to={"/category/102"}
                  >
                    ساعت و مچ بند هوشمند
                  </NavLink>
                  <div>
                    <div
                      className="collapse-button"
                      onClick={() => setIsOpen2(!isOpen2)}
                    >
                        فرهنگی و هنری                      
                    </div>
                    <Collapse isOpen={isOpen2}>
                      <NavLink
                        className={compareURL(location, "/category/77") ? "active" : null}
                        onClick={() => setHideDrawer(true)}
                        to={"/category/77"}
                      >
                        فیلم
                      </NavLink>
                      <NavLink
                        className={compareURL(location, "/category/79") ? "active" : null}
                        onClick={() => setHideDrawer(true)}
                        to={"/category/79"}
                      >
                        کتاب و مجلات
                      </NavLink>
                      <NavLink
                        className={compareURL(location, "/category/76") ? "active" : null}
                        onClick={() => setHideDrawer(true)}
                        to={"/category/76"}
                      >
                        کتاب و هنر
                      </NavLink>
                    </Collapse>
                  </div>
                  <NavLink
                    className={compareURL(location, "/category/119") ? "active" : null}
                    onClick={() => setHideDrawer(true)}
                    to={"/category/119"}
                  >
                    فروش ویژه
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          :
          null
      }
    </React.Fragment>
  )
}

export default SideMenu