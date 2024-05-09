import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import LoginSlice from "../slice/loginSlice"

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  login: LoginSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
})