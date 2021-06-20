import { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import PrivetRoute from "../../app/components/AppBar/components/PrivetRoute"
import PublicRoute from "../../app/components/AppBar/components/PublicRoute"
import { getCurrentUser } from "../../redux/auth/auth-operations"
import Loader from "../../client/components/Loader"

import AppBar from "./AppBar"
const AuthPage = lazy(() => import("../../client/pages/AuthPage"))
const PlanningPage = lazy(() => import("../../client/pages/PlanningPage"))
const AwardsPage = lazy(() => import("../../client/pages/AwardsPage"))
const ContactsPage = lazy(() => import("../../client/pages/ContactsPage"))
const NotFoundPage = lazy(() => import("../../app/pages/NotFoundPage"))
const MainPage = lazy(() => import("../../client/pages/MainPage"))

const App = () => {
  const dispatch = useDispatch()

  dispatch(getCurrentUser())
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  )
}

export default App
