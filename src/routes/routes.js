import React from "react"
import LandingPage from "../views/LandingPage/LandingPage"
import AccountPage from "../views/accountPage/AccountPage"
import UserPage from "../views/userPage/UserPage"
import NotFoundPage from "../views/notFoundPage/NotFoundPage"
const CartPage = React.lazy(() => import("../views/cartPage/CartPage"))
const ProductViewPage = React.lazy(() => import("../views/productViewPage/ProductViewPage"))
const SignInPage = React.lazy(() => import("../views/accountPage/signInPage/SignInPage"))
const SignUpPage = React.lazy(() => import("../views/accountPage/signupPage/SignUpPage"))
const ResetPasswordPage = React.lazy(() => import("../views/accountPage/resetPasswordPage/ResetPasswordPage"))
const UpdatePasswordPage = React.lazy(() => import("../views/accountPage/updatePasswordPage/UpdatePasswordPage"))
const CoordinatePage = React.lazy(() => import("../views/accountPage/coordinatePage/CoordinatePage"))
const CategoryPage = React.lazy(() => import("../views/categoryPage/CategoryPage"))
const UserProfile = React.lazy(() => import("../views/userPage/userProfile/UserProfile"))
const UserOrders = React.lazy(() => import("../views/userPage/userOrders/UserOrders"))
const UserCredit = React.lazy(() => import("../views/userPage/userCredit/UserCredit"))
const UserFavorites = React.lazy(() => import("../views/userPage/userFavorites/UserFavorites"))
const EditUser = React.lazy(() => import("../views/userPage/editUser/EditUser"))
const CheckoutPage = React.lazy(() => import("../views/checkoutPage/CheckoutPage"))

const routes = [
  {
    exact: true,
    path: "/",
    component: LandingPage
  },
  {
    exact: false,
    path: "/account",
    component: AccountPage
  },
  {     
    path: "/product/:id/:title",
    component: ProductViewPage,
    lazy: true
  },
  {
    exact: false,
    path: "/category/:id/:title",
    component: CategoryPage,
    lazy: true
  },
  {
    exact: false,
    path: "/user",
    component: UserPage
  },
  {
    exact: true,
    path: "/cart",
    component: CartPage,
    lazy: true
  },
  {
    exact: true,
    path: "/checkout",
    component: CheckoutPage,
    lazy: true
  },
  {
    exact: false,
    path: "*",
    component: NotFoundPage
  }
]

const userRoutes = [
  {
    exact: true,
    path: "/user/profile",
    component: UserProfile,
    lazy: true
  },
  {
    exact: true,
    path: "/user/orders",
    component: UserOrders,
    lazy: true
  },
  {
    exact: true,
    path: "/user/credit",
    component: UserCredit,
    lazy: true
  },
  {
    exact: true,
    path: "/user/edit",
    component: EditUser,
    lazy: true
  },
  {
    exact: true,
    path: "/user/favorites",
    component: UserFavorites,
    lazy: true
  }
]

const accountRoutes = [
  {
    exact: true,
    path: "/account/signup",
    component: SignUpPage,
    lazy: true
  },
  {
    exact: true,
    path: "/account/signin",
    component: SignInPage,
    lazy: true
  },
  {
    exact: true,
    path: "/account/reset_password",
    component: ResetPasswordPage,
    lazy: true
  },
  {
    exact: true,
    path: "/account/coordiante",
    component: CoordinatePage,
    lazy: true
  },
  {
    exact: true,
    path: "/account/update_password",
    component: UpdatePasswordPage,
    lazy: true
  }
]

export {
  routes,
  userRoutes,
  accountRoutes
}