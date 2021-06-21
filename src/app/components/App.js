import { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import PrivetRoute from "../../app/components/AppBar/components/PrivetRoute"
import PublicRoute from "../../app/components/AppBar/components/PublicRoute"
import routes from "../routes"
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
            path={routes.auth}
            restricted
            redirectTo={routes.main}
            component={AuthPage}
          />
          <PrivetRoute
            exact
            path={routes.main}
            redirectTo={routes.auth}
            component={MainPage}
          />
          <PrivetRoute
            exact
            path={routes.planning}
            redirectTo={routes.auth}
            component={PlanningPage}
          />

          <PrivetRoute
            exact
            path={routes.awards}
            redirectTo={routes.auth}
            component={AwardsPage}
          />

          <Route exact path={routes.contacts} component={ContactsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
