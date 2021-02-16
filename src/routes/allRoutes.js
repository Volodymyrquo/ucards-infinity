import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import Auth from "../pages/Auth/AuthPage"
// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Pages
import Cards from "../pages/Cards/Cards"
import Contacts from "../pages/ContactList/contacts-list"
import Currencies from "../pages/Currencies/Currencies"
import Requisites from "../pages/Requisites/Requisites"
import Tariffs from "../pages/Tariffs/Tariffs"
import Users from "../pages/UsersPage/UsersPage"
import CardTypes from "../pages/CardsTypes/CardsTypes"
import CryptoWallet from "../pages/Crypto/CryptoWallet/crypto-wallet"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  //Pages
  { path: "/cards", component: Cards },
  { path: "/contacts", component: Contacts },
  { path: "/currencies", component: Currencies },
  { path: "/requisites", component: Requisites },
  { path: "/tariffs", component: Tariffs },
  { path: "/users", component: Users },
  { path: "/cardtypes", component: CardTypes },
  { path: "/crypto-wallet", component: CryptoWallet },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/auth", component: Auth },
]

export { userRoutes, authRoutes }
