import { createAction } from "@reduxjs/toolkit"

export const fetchAwardsRequest = createAction("awards/fetchAwardsRequest")
export const fetchAwardsSuccess = createAction("awards/fetchAwardsSuccess")
export const fetchAwardsError = createAction("awards/fetchAwardsError")

const buyAwardsRequest = createAction("awards/buyAwardsRequest")
const buyAwardsSuccess = createAction("awards/buyAwardsSuccess")
const buyAwardsError = createAction("awards/buyAwardsError")

const actions = {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
  buyAwardsRequest,
  buyAwardsSuccess,
  buyAwardsError,
}

export default actions
