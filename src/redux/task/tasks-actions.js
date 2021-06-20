import { createAction } from "@reduxjs/toolkit"

export const addTasksRequest = createAction("tasks/addTasksRequest")
export const addTasksSuccess = createAction("tasks/addTasksSuccess")
export const addTasksError = createAction("tasks/addTasksError")

export const taskUpdateRequest = createAction("task/taskUpdateRequest")
export const taskUpdateSuccess = createAction("task/taskUpdateSuccess")
export const taskUpdateError = createAction("task/taskUpdateError")

export const fetchTasksRequest = createAction("fetchTasksRequest")
export const fetchTasksSuccess = createAction("fetchTasksSuccess")
export const fetchTasksError = createAction("fetchTasksError")

const actions = {
  addTasksRequest,
  addTasksSuccess,
  addTasksError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  taskUpdateRequest,
  taskUpdateSuccess,
  taskUpdateError,
}

export default actions
