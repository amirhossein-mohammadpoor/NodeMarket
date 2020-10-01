import React, { Suspense } from "react"
import "./UserPage.scss"
import { userRoutes } from "../../routes/routes"
import {
  Route,
  Switch,
  useRouteMatch,
  NavLink,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { FaUser, FaCoins, FaFirstOrder, FaHeart } from "react-icons/fa"
import { BiExit } from "react-icons/bi"
import { connect, useSelector } from "react-redux"
import { userSignOut } from "../../redux/actions/userActions"
import Fallback from "../../components/fallback/Fallback"

const UserPage = ({ userSignOut }) => {
  const token = useSelector(state => state.user.token)
  const history = useHistory()
  const { path } = useRouteMatch()
  const location = useLocation().pathname

  const handleLogOut = () => {
    userSignOut()
    history.push("/")
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={4} className="user-page-nav mb-4 mb-lg-0">
          <h4>پروفایل</h4>
          <div className={location === "/user/profile" ? "active" : null}>
            <NavLink to="/user/profile">
              <FaUser />
              حساب کاربری
            </NavLink>
          </div>
          <div className={location === "/user/credit" ? "active" : null}>
            <NavLink to="/user/credit">
              <FaCoins />
              افزایش اعتبار
            </NavLink>
          </div>
          <div className={location === "/user/favorites" ? "active" : null}>
            <NavLink to="/user/favorites">
              <FaHeart />
              لیست علاقه مندی ها
            </NavLink>
          </div>
          <div className={location === "/user/orders" ? "active" : null}>
            <NavLink to="/user/orders">
              <FaFirstOrder />
              لیست سفارشات
            </NavLink>
          </div>
          <div className="logout" onClick={handleLogOut}>
            <BiExit />
            خروج
          </div>
        </Col>
        <Col xs={12} lg={8}>
          <Switch>
            {
              !token ? 
                <Redirect to="/account/signin" />
                :
                <React.Fragment>
                  <Route
                    exact={true}
                    path={path}
                  >
                    <Redirect to={`${path}/profile`} />
                  </Route>
                  {
                    userRoutes.map(route => {
                      if (route.lazy) {
                        return (
                          <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                          >
                            <Suspense fallback={<Fallback />}>
                              <route.component />
                            </Suspense>
                          </Route>
                        )
                      } else {
                        return (
                          <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                          />
                        )
                      }
                    })
                  }                
              </React.Fragment>
            }            
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(null, { userSignOut })(UserPage)