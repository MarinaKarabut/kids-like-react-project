import axios from "axios"

import actions, { taskActiveSwitcherRequest } from "./tasks-actions"

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
  const formData = {
    days: body,
  }
  dispatch(actions.taskUpdateRequest())
  try {
    const { data } = await axios.patch(`/task/single-active/${id}`, formData)
    console.log(data)
    dispatch(actions.taskUpdateSuccess(data))
  } catch (error) {
    dispatch(actions.taskUpdateError(error))
  }
}

export const taskActiveSwitcher = (taskId, body) => async (dispatch) => {
  dispatch(actions.taskUpdateRequest(taskActiveSwitcherRequest))
  try {
    const { data } = await axios.patch(`/task/switch/${taskId}}`, body)
    console.log(data)
    dispatch(actions.taskUpdateSuccess(data))
  } catch (error) {
    dispatch(actions.addTasksSuccess(error))
  }
}
