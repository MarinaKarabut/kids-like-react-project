import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import {
  taskUpdateSuccess,
  taskUpdateError,
  addTasksSuccess,
  fetchTasksSuccess,
  addTasksError,
  taskSwitchActiveSuccess,
} from "./tasks-actions"
import { getCurrentUserSuccess, loginSuccess } from "../auth/auth-actions"

// const initialStateTasks=[]
const initialStateUpdatedRewardsPlanned = 0

const initialStateUpdatedRewardsGained = 0

const initialStateUpdatedBalance = 0

const initialStateError = null

const task = createReducer([], {
  [getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  [loginSuccess]: (_, { payload }) => payload.week.tasks,
  [addTasksSuccess]: (state, { payload }) => [...state, payload],
  // [fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
})

const updatedRewardsPlanned = createReducer(initialStateUpdatedRewardsPlanned, {
  [taskUpdateSuccess]: (_, { payload }) => payload.updatedWeekPlannedRewards,
})

const updatedRewardsGained = createReducer(initialStateUpdatedRewardsGained, {
  [taskSwitchActiveSuccess]: (_, { payload }) =>
    payload.updatedWeekGainedRewards,
})

const updatedBalance = createReducer(initialStateUpdatedBalance, {
  [taskSwitchActiveSuccess]: (_, { payload }) => payload.updatedBalance,
})

const error = createReducer(initialStateError, {
  [taskUpdateError]: (_, { payload }) => payload,
  [addTasksError]: (_, { payload }) => payload,
})

const tasksNewReducer = combineReducers({
  task,
  updatedRewardsPlanned,
  updatedRewardsGained,
  updatedBalance,
  error,
})
export default tasksNewReducer
