import { contactReducer, filterReducer } from './reducers'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cont: contactReducer,
    fil: filterReducer,
  },
});