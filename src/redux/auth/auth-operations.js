import axios from "axios"

import actions from "./auth-actions"

axios.defaults.baseURL = "https://kidslike-v1-backend.goit.global"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ""
  },
}

export const register = (body) => async (dispatch) => {
  dispatch(actions.registerRequest())

  try {
    const { data } = await axios.post("/auth/register", body)

    token.set(data.token)

    dispatch(actions.registerSuccess(data))
  } catch (error) {
    dispatch(actions.registerError(error.message))
  }
}

export const logIn = (body) => async (dispatch) => {
  dispatch(actions.loginRequest())

  try {
    const { data } = await axios.post("/auth/login", body)

    token.set(data.token)

    dispatch(actions.loginSuccess(data))
  } catch (error) {
    dispatch(actions.loginError(error.message))
  }
}

export const logOut = () => async (dispatch) => {
  dispatch(actions.logoutRequest())

  try {
    await axios.post("/auth/logout")

    token.unset()
    dispatch(actions.logoutSuccess())
  } catch (error) {
    dispatch(actions.logoutError(error.message))
  }
}

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState()
  if (!persistedToken) {
    return
  }

  token.set(persistedToken)

  dispatch(actions.getCurrentUserRequest())
  try {
    const { data } = await axios.get("/user/info")
    dispatch(actions.getCurrentUserSuccess(data))
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message))
  }
}
