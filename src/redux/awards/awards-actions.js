import { createAction } from "@reduxjs/toolkit"

export const fetchAwardsRequest = createAction("awards/fetchAwardsRequest")
export const fetchAwardsSuccess = createAction("awards/fetchAwardsSuccess")
export const fetchAwardsError = createAction("awards/fetchAwardsError")

const actions = {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  fetchAwardsError,
}

export default actions
