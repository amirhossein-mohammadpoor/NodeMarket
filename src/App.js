import React from 'react'
import "./App.scss"
import { Provider } from "react-redux"
import store from "./redux/store"
import { routes } from "./routes/routes"
import Layout from "./containers/DefaultLayout/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              )
            })
          }
        </Switch>
      </Layout>
    </Router>
  </Provider>
)

export default App
