import { combineReducers } from "redux"
import { createReducer, current } from "@reduxjs/toolkit"
import actions, { taskUpdateSuccess } from "./tasks-actions"
import { getCurrentUserSuccess, loginSuccess } from "../auth/auth-actions"

const task = createReducer([], {
  [actions.addTasksSuccess]: (state, { payload }) => payload.week.tasks,
  [getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  // [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
  [loginSuccess]: (_, { payload }) => payload.week.tasks,
})

const error = createReducer(null, {
  [actions.createTaskError]: (_, { payload }) => payload,
  [actions.taskUpdateError]: (_, { payload }) => payload,
})

const tasksNewReducer = combineReducers({
  task,
  error,
})
export default tasksNewReducer
