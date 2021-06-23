import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "./awards-actions"

const initialStateAwards = []

const initialStateError = null

const awards = createReducer(initialStateAwards, {
  [actions.fetchAwardsSuccess]: (_, { payload }) => payload.data.ruGifts,
  [actions.buyAwardsSuccess]: (_, { payload }) => payload.purchasedGiftIds,
})

const error = createReducer(initialStateError, {
  [actions.fetchAwardsError]: (_, { payload }) => payload,
  [actions.buyAwardsError]: (_, { payload }) => payload,
})

const awardsReducer = combineReducers({
  awards,
  error,
})
export default awardsReducer
