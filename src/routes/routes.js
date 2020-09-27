import LandingPage from "../views/LandingPage/LandingPage"
import AccountPage from "../views/accountPage/AccountPage"
import SignInPage from "../views/accountPage/signInPage/SignInPage"
import SignUpPage from "../views/accountPage/signupPage/SignUpPage"
import ResetPasswordPage from "../views/accountPage/resetPasswordPage/ResetPasswordPage"
import UpdatePasswordPage from "../views/accountPage/updatePasswordPage/UpdatePasswordPage"
import CoordinatePage from "../views/accountPage/coordinatePage/CoordinatePage"
import ProductViewPage from "../views/productViewPage/ProductViewPage"
import CategoryPage from "../views/categoryPage/CategoryPage"
import UserPage from "../views/userPage/UserPage"
import UserProfile from "../views/userPage/userProfile/UserProfile"
import UserOrders from "../views/userPage/userOrders/UserOrders"
import UserCredit from "../views/userPage/userCredit/UserCredit"
import UserFavorites from "../views/userPage/userFavorites/UserFavorites"
import NotFoundPage from "../views/notFoundPage/NotFoundPage"
import CartPage from "../views/cartPage/CartPage"
import EditUser from "../views/userPage/editUser/EditUser"
import CheckoutPage from "../views/checkoutPage/CheckoutPage"

const routes = [
  {
    exact: true,
    path: "/",
    component: LandingPage
  },
  {
    path: "/account",
    component: AccountPage
  },
  {
    exact: true,
    path: "/product/:id",
    component: ProductViewPage
  },
  {
    exact: true,
    path: "/category/:id",
    component: CategoryPage
  },
  {
    path: "/user",
    component: UserPage,
  },
  {
    exact: true,
    path: "/cart",
    component: CartPage,
  },
  {
    exact: true,
    path: "/checkout",
    component: CheckoutPage,
  },
  {
    path: "*",
    component: NotFoundPage
  }
]

const userRoutes = [
  {
    exact: true,
    path: "/user/profile",
    component: UserProfile,
  },
  {
    exact: true,
    path: "/user/orders",
    component: UserOrders,
  },
  {
    exact: true,
    path: "/user/credit",
    component: UserCredit,
  },
  {
    exact: true,
    path: "/user/edit",
    component: EditUser,
  },
  {
    exact: true,
    path: "/user/favorites",
    component: UserFavorites,
  }
]

const accountRoutes = [
  {
    exact: true,
    path: "/account/signup",
    component: SignUpPage
  },
  {
    exact: true,
    path: "/account/signin",
    component: SignInPage
  },
  {
    exact: true,
    path: "/account/reset_password",
    component: ResetPasswordPage
  },
  {
    exact: true,
    path: "/account/coordiante",
    component: CoordinatePage
  },
  {
    exact: true,
    path: "/account/update_password",
    component: UpdatePasswordPage
  }
]

export {
  routes,
  userRoutes,
  accountRoutes
}