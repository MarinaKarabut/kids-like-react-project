import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import { taskUpdateSuccess, addTasksSuccess } from "./tasks-actions"
import { getCurrentUserSuccess, loginSuccess } from "../auth/auth-actions"

const task = createReducer([], {
  [addTasksSuccess]: (_, { payload }) => payload.week.tasks,
  [getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  // [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
  [loginSuccess]: (_, { payload }) => payload.week.tasks,
  // [taskUpdateSuccess]: (_, { payload }) => payload,
})

// const error = createReducer(null, {
//   [actions.createTaskError]: (_, { payload }) => payload,
//   [actions.taskUpdateError]: (_, { payload }) => payload,
// })

const tasksNewReducer = combineReducers({
  task,
  // error,
})
export default tasksNewReducer
