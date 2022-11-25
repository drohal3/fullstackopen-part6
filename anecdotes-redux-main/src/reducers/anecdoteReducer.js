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
    voteAnecdote: (state, action) => {
      const anecdoteId = action.payload
      const anecdoteToChange = state.find(n => n.id === anecdoteId)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      return state.map(anecdote =>
        anecdote.id !== anecdoteId ? anecdote : changedAnecdote
      )
    }
  }
})

export const {setAnecdotes, appendAnecdote, voteAnecdote, newAnecdote} = anecdoteSlice.actions

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

export default anecdoteSlice.reducer