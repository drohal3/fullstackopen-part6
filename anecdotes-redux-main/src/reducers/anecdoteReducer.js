import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes: (state, action) => {
      console.log('setAnecdoted in reducer', action.payload)
      return action.payload
    },
    appendAnecdote: (state, action) => {
      state.push(action.payload)
    },
    updateAnecdote: (state, action) => {
      const anecdoteId = action.payload.id

      return state.map(anecdote =>
        anecdote.id !== anecdoteId ? anecdote : action.payload
      )
    }
  }
})

export const {setAnecdotes, appendAnecdote, updateAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = anecdoteToCreate => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdoteToCreate)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const changedAnecdote = {...anecdote, votes: anecdote.votes +1}
    const response = await anecdoteService.update(anecdote.id, changedAnecdote)
    dispatch(updateAnecdote(response))
  }
}

export default anecdoteSlice.reducer