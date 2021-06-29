import { createAction } from "@reduxjs/toolkit"

export const fetchAwardsRequest = createAction("awards/fetchAwardsRequest")
export const fetchAwardsSuccess = createAction("awards/fetchAwardsSuccess")
export const fetchAwardsError = createAction("awards/fetchAwardsError")

export const buyAwardsRequest = createAction("awards/buyAwardsRequest")
export const buyAwardsSuccess = createAction("awards/buyAwardsSuccess")
export const buyAwardsError = createAction("awards/buyAwardsError")

const actions = {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
  buyAwardsRequest,
  buyAwardsSuccess,
  buyAwardsError,
}

export default actions
