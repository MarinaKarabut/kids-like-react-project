import axios from "axios"

import actions from "./tasks-actions"

export const addTask = (body) => async (dispatch) => {
  dispatch(actions.addTasksRequest())
  try {
    const data = await axios.post("/task", body)
    dispatch(actions.addTasksSuccess(data))
    console.log(data)
  } catch (error) {
    dispatch(actions.addTasksError(error))
  }
}

export const fetchTasks = () => async (dispatch) => {
  dispatch(actions.fetchTasksRequest())
  try {
    const data = await axios.get("/user/info")
    console.log(data)
    dispatch(actions.fetchTasksSuccess(data))
  } catch (error) {
    dispatch(actions.fetchTasksError(error))
  }
}

export const taskUpdate = (id, body) => async (dispatch) => {
  const formatData = {
    days: body,
  }
  dispatch(actions.taskUpdateRequest())
  try {
    const { data } = await axios.patch(`/task/single-active/${id}`, formatData)
    console.log(data)
    dispatch(actions.taskUpdateSuccess(data))
  } catch (error) {
    dispatch(actions.taskUpdateError(error))
  }
}
