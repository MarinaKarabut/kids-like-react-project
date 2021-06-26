import axios from "axios"

import actions from "./tasks-actions"

export const addTask = (body) => async (dispatch) => {
  dispatch(actions.addTasksRequest())
  try {
    const { data } = await axios.post("/task", body)
    dispatch(actions.addTasksSuccess(data))
  } catch (error) {
    dispatch(actions.addTasksError(error))
  }
}

export const fetchTasks = () => async (dispatch) => {
  dispatch(actions.fetchTasksRequest())
  try {
    const { data } = await axios.get("/user/info")
    dispatch(actions.fetchTasksSuccess(data))
  } catch (error) {
    dispatch(actions.fetchTasksError(error))
  }
}

export const taskUpdate = (id, body) => async (dispatch) => {
  const formData = {
    days: body,
  }
  dispatch(actions.taskUpdateRequest())
  try {
    const { data } = await axios.patch(`/task/single-active/${id}`, formData)
    dispatch(actions.taskUpdateSuccess(data))
  } catch (error) {
    dispatch(actions.taskUpdateError(error))
  }
}

export const taskSwitchActive = (id, body) => async (dispatch) => {
  const date = {
    date: body,
  }
  dispatch(actions.taskSwitchActiveRequest())
  try {
    const { data } = await axios.patch(`/task/switch/${id}}`, date)
    dispatch(actions.taskSwitchActiveSuccess(data))
  } catch (error) {
    dispatch(actions.taskSwitchActiveError(error))
  }
}
