import axios from "axios"
import actions from "./awards-actions"

export const fetchAwards = () => async (dispatch) => {
  dispatch(actions.fetchAwardsRequest())
  try {
    const data = await axios.get("/gift")
    dispatch(actions.fetchAwardsSuccess(data))
    console.log(data)
  } catch (error) {
    dispatch(actions.fetchAwardsError(error))
  }
}
