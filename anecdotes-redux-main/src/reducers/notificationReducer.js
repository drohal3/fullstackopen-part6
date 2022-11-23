import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  message: ""
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    messageChange(state, action) {
      return {message: action.payload}
    }
  }
})

export const { messageChange } = notificationSlice.actions
export default notificationSlice.reducer