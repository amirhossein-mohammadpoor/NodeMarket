import React from "react"
import { Switch, Route } from "react-router-dom"
import { accountRoutes } from "../../routes/routes"

const AccountPage = () => {  

  return (
    <Switch>
      {
        accountRoutes.map(route => (
          <Route 
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))
      }
    </Switch>
  )
}

export default AccountPage