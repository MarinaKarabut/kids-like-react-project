import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "./awards-actions"

const initialStateAwards = []

const initialStateError = null

const initialStateSelectedAwards = []

const awards = createReducer(initialStateAwards, {
  [actions.fetchAwardsSuccess]: (_, { payload }) => payload.ruGifts,
  // [actions.buyAwardsSuccess]: (_, { payload }) => payload.purchasedGiftIds,
  // [actions.buyAwardsSuccess]: (state, { payload }) => {
  //   const updateAwards = [...state] 
  //   updateAwards.map(award => award.id === payload.purchasedGiftIds ? { ...award, isSelected: true } : award,
  // )
  // return [...updateAwards]
  //   }
})

const selectedAwards = createReducer(initialStateSelectedAwards, {
  [actions.buyAwardsSuccess]: (_, { payload }) => payload.purchasedGiftIds,
})

// const isSelected = createReducer(false,{
//   [actions.buyAwardsSuccess]: (state, { payload }) => {
//     const updateAwards = [...state] 
//     updateAwards.map(award => award.id === payload.purchasedGiftIds ? { ...award, isSelected: true } : award,
//   )
//   return [...updateAwards]
//     }
// })


const error = createReducer(initialStateError, {
  [actions.fetchAwardsError]: (_, { payload }) => payload,
  [actions.buyAwardsError]: (_, { payload }) => payload,
})

const awardsReducer = combineReducers({
  awards,
  error,
  selectedAwards,
  // isSelected
})
export default awardsReducer

