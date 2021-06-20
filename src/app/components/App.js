// import { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import PrivetRoute from "../../app/components/AppBar/components/PrivetRoute"
import PublicRoute from "../../app/components/AppBar/components/PublicRoute"

import AppBar from "./AppBar"
import AuthPage from "../../client/pages/AuthPage"
import PlanningPage from "../../client/pages/PlanningPage"
import AwardsPage from "../../client/pages/AwardsPage"
import ContactsPage from "../../client/pages/ContactsPage"
import NotFoundPage from "../../app/pages/NotFoundPage"
import MainPage from "../../client/pages/MainPage"

import { getCurrentUser } from "../../redux/auth/auth-operations"

const App = () => {
  const dispatch = useDispatch()

  dispatch(getCurrentUser())
  return (
    <>
      <AppBar />
      <Switch>
        <PublicRoute
          exact
          path="/register"
          restricted
          redirectTo="/"
          component={AuthPage}
        />
        <PrivetRoute
          exact
          path="/"
          redirectTo="/register"
          component={MainPage}
        />
        <PrivetRoute
          exact
          path="/planning"
          redirectTo="/register"
          component={PlanningPage}
        />

        <PrivetRoute
          exact
          path="/awards"
          redirectTo="/register"
          component={AwardsPage}
        />

        <Route exact path="/contacts" component={ContactsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  )
}

export default App
