import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import {
  taskUpdateSuccess,
  taskUpdateError,
  addTasksSuccess,
  addTasksError,
  taskSwitchActiveSuccess,
  taskSwitchActiveError,
} from "./tasks-actions"
import { getCurrentUserSuccess, loginSuccess } from "../auth/auth-actions"
import { fetchTasks } from "./tasks-operations"

const initialStateTasks = []

const initialStateUpdatedRewardsPlanned = 0

const initialStateUpdatedRewardsGained = 0

const initialStateUpdatedBalance = 0

const initialStateError = null

const task = createReducer(initialStateTasks, {
  [getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  [loginSuccess]: (_, { payload }) => payload.week.tasks,
  [addTasksSuccess]: (state, { payload }) => [...state, payload],
  [fetchTasks]: (_, { payload }) => payload.week.tasks,
  [taskSwitchActiveSuccess]: (state, { payload }) => {
    const newState = [...state]
    const index = newState.findIndex(
      (item) => item._id === payload.updatedTask.id
    )
    newState.splice(index, 1, {
      ...payload.updatedTask,
      _id: payload.updatedTask.id,
    })
    return [...newState]
  },

  [taskUpdateSuccess]: (state, { payload }) => {
    const newState = [...state]
    const index = newState.findIndex(
      (item) => item._id === payload.updatedTask.id
    )
    newState.splice(index, 1, {
      ...payload.updatedTask,
      _id: payload.updatedTask.id,
    })
    return [...newState]
  },
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
  [taskSwitchActiveError]: (_, { payload }) => payload,
})

const tasksNewReducer = combineReducers({
  task,
  updatedRewardsPlanned,
  updatedRewardsGained,
  updatedBalance,
  error,
})
export default tasksNewReducer
