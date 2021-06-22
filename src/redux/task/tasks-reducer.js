import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import {
  taskUpdateSuccess,
  addTasksSuccess,
  fetchTasksSuccess,
} from "./tasks-actions"
import { getCurrentUserSuccess, loginSuccess } from "../auth/auth-actions"

const task = createReducer([], {
  [addTasksSuccess]: (_, { payload }) => payload.week.tasks,
  [getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  // [fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
  [loginSuccess]: (_, { payload }) => payload.week.tasks,
  // [taskUpdateSuccess]: (_, { payload }) => payload,
})

// const error = createReducer(null, {
//   [actions.createTaskError]: (_, { payload }) => payload,
//   [actions.taskUpdateError]: (_, { payload }) => payload,
// })

const points = createReducer(
  {},
  {
    [taskUpdateSuccess]: (_, { payload }) => payload,
    // [getCurrentUserSuccess]: (_, { payload }) => payload.week.rewardsPlanned,
    [getCurrentUserSuccess]: (_, { payload }) => payload.week,
  }
)

const tasksNewReducer = combineReducers({
  task,
  points,
  // error,
})
export default tasksNewReducer
