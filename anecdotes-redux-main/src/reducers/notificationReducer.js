import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  message: null
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: { // not ideal solution, but for demonstration and practice good enough
    messageChange(state, action) {
      return {message: action.payload}
    },
    messageReset: () => {
      return {message: null}
    },
  },
})

export const { messageChange, messageReset } = notificationSlice.actions

export const setNotification = (message, timeout) => {
  return dispatch => {
    dispatch(messageChange(message))
    setTimeout(() => {
      dispatch(messageReset())
    }, timeout * 1000)
  }
}
export default notificationSlice.reducer