// import actions from "./awards-actions"
// import AwardsService from "./awards-service"

// const awardsService = new AwardsService()

// export const fetchAwards = () => async (dispatch) => {
//   dispatch(actions.fetchAwardsRequest())
//   try {
//     const data = await awardsService.get("gift")
//     dispatch(actions.fetchAwardsSuccess(data))
//   } catch (error) {
//     dispatch(actions.fetchAwardsError(error))
//   }
// }

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
