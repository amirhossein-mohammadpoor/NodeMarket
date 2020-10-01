import React, { Suspense } from 'react'
import "./App.scss"
import { Provider } from "react-redux"
import store from "./redux/store"
import { routes } from "./routes/routes"
import Layout from "./containers/DefaultLayout/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Fallback from "./components/fallback/Fallback"

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          {
            routes.map(route => {
              if (route.lazy) {
                return (
                  <Route
                    key={route.path}
                    exact
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
        </Switch>
      </Layout>
    </Router>
  </Provider>
)

export default App
