import { createReducer } from "@reduxjs/toolkit"
import {
  getCurrentUserRequest,
  getCurrentUserSuccess,
  registerRequest,
  registerSuccess,
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
} from "../auth/auth-actions"
import {
  addTasksRequest,
  addTasksSuccess,
  taskUpdateRequest,
  taskUpdateSuccess,
  fetchTasksRequest,
  fetchTasksSuccess,
  taskActiveSwitcherRequest,
  taskActiveSwitcherSuccess,
} from "../task/tasks-actions"

import {
  fetchAwardsRequest,
  fetchAwardsSuccess,
  //   buyAwardsRequest,
  //   buyAwardsSuccess,
} from "../awards/awards-actions"

const loaderReducer = createReducer(false, {
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,

  [registerRequest]: () => true,
  [registerSuccess]: () => false,

  [loginRequest]: () => true,
  [loginSuccess]: () => false,

  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,

  [addTasksRequest]: () => true,
  [addTasksSuccess]: () => false,

  [taskUpdateRequest]: () => true,
  [taskUpdateSuccess]: () => false,

  [fetchTasksRequest]: () => true,
  [fetchTasksSuccess]: () => false,

  [taskActiveSwitcherRequest]: () => true,
  [taskActiveSwitcherSuccess]: () => false,

  [fetchAwardsRequest]: () => true,
  [fetchAwardsSuccess]: () => false,

  //   [buyAwardsRequest]: () => true,
  //   [buyAwardsSuccess]: () => false,
})

export default loaderReducer
