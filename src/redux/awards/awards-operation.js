import axios from "axios"
import actions from "./awards-actions"

export const fetchAwards = () => async (dispatch) => {
  dispatch(actions.fetchAwardsRequest())
  try {
    const { data } = await axios.get("/gift")
    dispatch(actions.fetchAwardsSuccess(data))
  } catch (error) {
    dispatch(actions.fetchAwardsError(error))
  }
}

export const buyAwards = (body) => async (dispatch) => {
  dispatch(actions.buyAwardsRequest())
  try {
    const { data } = await axios.patch("/gift", body)
    dispatch(actions.buyAwardsSuccess(data))
  } catch (error) {
    dispatch(actions.buyAwardsError(error))
  }
}
