import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"

import actions from "./auth-actions"

const initialStateUser = {
  email: "",
}

const initialStateToken = null

const initialStateError = null

const initialStateBalance = 0

const initialStateRewardsGained = 0

const initialStateRewardsPlanned = 0

const user = createReducer(initialStateUser, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialStateUser,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
})

const token = createReducer(initialStateToken, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => initialStateToken,
  [actions.userSignInGoogleSuccess]: (_, { payload }) => payload,
})

const error = createReducer(initialStateError, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.registerSuccess]: () => initialStateError,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => initialStateError,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => initialStateError,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
})

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.getCurrentUserError]: () => false,
  [actions.logoutSuccess]: () => false,
})

const balance = createReducer(initialStateBalance, {
  [actions.registerSuccess]: (_, { payload }) => payload.user.balance,
  [actions.loginSuccess]: (_, { payload }) => payload.user.balance,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload.user.balance,
  [actions.logoutSuccess]: () => initialStateBalance,
})

const rewardsGained = createReducer(initialStateRewardsGained, {
  [actions.registerSuccess]: (_, { payload }) => payload.week.rewardsGained,
  [actions.loginSuccess]: (_, { payload }) => payload.week.rewardsGained,
  [actions.getCurrentUserSuccess]: (_, { payload }) =>
    payload.week.rewardsGained,
})

const rewardsPlanned = createReducer(initialStateRewardsPlanned, {
  [actions.registerSuccess]: (_, { payload }) => payload.week.rewardsPlanned,
  [actions.loginSuccess]: (_, { payload }) => payload.week.rewardsPlanned,
  [actions.getCurrentUserSuccess]: (_, { payload }) =>
    payload.week.rewardsPlanned,
})

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
  balance,
  rewardsGained,
  rewardsPlanned,
})
