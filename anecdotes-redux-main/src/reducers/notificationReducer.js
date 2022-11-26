import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  message: null,
  timeoutId: null
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: { // not ideal solution, but for demonstration and practice good enough
    messageChange(state, action) {
      clearTimeout(state.timeoutId)
      if (state.timeoutId) {
        console.log('cancel timeout', state.timeoutId)
        clearTimeout(state.timeoutId)
      }
      return {message: action.payload.message, timeoutId: action.payload.timeoutId}
    },
    messageReset: () => {
      return {message: null}
    },
  },
})

export const { messageChange, messageReset } = notificationSlice.actions

export const setNotification = (message, timeout) => {
  return dispatch => {
    const timeoutId = setTimeout(() => {
      dispatch(messageReset())
    }, timeout * 1000)
    dispatch(messageChange({message, timeoutId}))
  }
}
export default notificationSlice.reducer