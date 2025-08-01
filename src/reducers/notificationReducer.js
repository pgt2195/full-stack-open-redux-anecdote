import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  content: '',
}


const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(_state, action) {
      return { content: action.payload}
    },
    clearNotification(_state, _action) {
      return initialState
    }
  }
})

export const { showNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer