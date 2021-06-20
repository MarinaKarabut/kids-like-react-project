import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "./awards-actions"

const awards = createReducer([], {
  [actions.fetchAwardsSuccess]: (_, { payload }) => payload.data.ruGifts,
})

const error = createReducer(null, {
  [actions.fetchAwardsError]: (_, { payload }) => payload,
})

const awardsReducer = combineReducers({
  awards,
  error,
})
export default awardsReducer
