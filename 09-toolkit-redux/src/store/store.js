import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
counterSlice
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})