import { createAction } from "@reduxjs/toolkit"

export const addTasksRequest = createAction("task/addTasksRequest")
export const addTasksSuccess = createAction("task/addTasksSuccess")
export const addTasksError = createAction("task/addTasksError")

export const taskUpdateRequest = createAction("task/taskUpdateRequest")
export const taskUpdateSuccess = createAction("task/taskUpdateSuccess")
export const taskUpdateError = createAction("task/taskUpdateError")

export const fetchTasksRequest = createAction("task/fetchTasksRequest")
export const fetchTasksSuccess = createAction("task/fetchTasksSuccess")
export const fetchTasksError = createAction("task/fetchTasksError")

export const taskSwitchActiveRequest = createAction(
  "task/taskSwitchActiveRequest"
)
export const taskSwitchActiveSuccess = createAction(
  "task/taskSwitchActiveSuccess"
)
export const taskSwitchActiveError = createAction("task/taskSwitchActiveError")

// export const tasksActiveRequest = createAction("tasks/tasksActiveRequest")
// export const tasksActiveSuccess = createAction("tasks/tasksActiveSuccess")
// export const tasksActiveError = createAction("tasks/tasksActiveError")

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
  taskSwitchActiveRequest,
  taskSwitchActiveSuccess,
  taskSwitchActiveError,
  // tasksActiveRequest,
  // tasksActiveSuccess,
  // tasksActiveError,
}

export default actions
