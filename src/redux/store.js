/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import authReducer from "./auth/auth-reducer"
import awardsReducer from "./awards/awards-reducer"
import tasksNewReducer from "./task/tasks-reducer"
import loaderReducer from "./loader/loader-reducer"

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    awards: awardsReducer,
    task: tasksNewReducer,
    loader: loaderReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
})

export const persistor = persistStore(store)

export default { store, persistor }
