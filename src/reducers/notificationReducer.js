import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: "notification",
  initialState: '',
  reducers: {
    setNotification(_state, action) {
      return action.payload
    },
    clearNotification(_state, _action) {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

export const showNotification = (notification, time) => {
  return dispatch => {
    dispatch(setNotification(notification))
    const timer = setTimeout(() => {
      dispatch(clearNotification())
    }, time*1000)
    return () => clearTimeout(timer) // Évite les conflits entre les notifs qui se chevauchent
  }
}

export default notificationSlice.reducer