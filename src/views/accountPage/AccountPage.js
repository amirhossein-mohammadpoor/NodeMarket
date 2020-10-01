import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"
import { accountRoutes } from "../../routes/routes"
import Fallback from "../../components/fallback/Fallback"

const AccountPage = () => {

  return (
    <Switch>
      {
        accountRoutes.map(route => {
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
    </Switch>
  )
}

export default AccountPage