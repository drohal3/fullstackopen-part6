import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
//  empty at the start, then loaded from the server
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject)

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
    },
    newAnecdote: (state, action) => {
      const newAnecdote = asObject(action.payload)
      console.log('new anecdote', newAnecdote)

      return [...state, newAnecdote]
    }
  }
})


// const anecdoteReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//
//   switch (action.type) {
//     case 'INIT_ANECDOTES':
//       return action.data
//     case 'NEW_ANECDOTE':
//       const newAnecdote = asObject(action.data)
//       console.log('new anecdote', newAnecdote)
//
//       return [...state, newAnecdote]
//     case 'VOTE_ANECDOTE':
//       const anecdoteId = action.data
//       const newState = state.map(anecdote => anecdote.id !==  anecdoteId ? anecdote : {...anecdote, votes: anecdote.votes + 1})
//       console.log('newState', newState)
//
//       return newState
//   }
//
//   return state
// }

// export const initAnecdotes = () => {
//   return {
//     type: 'INIT_ANECDOTES',
//     data: initialState,
//   }
// }
//
// export const newAnecdote = (anecdote) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: anecdote
//   }
// }
//
// export const voteAnecdote = (anecdoteId) => {
//   return {
//     type: 'VOTE_ANECDOTE',
//     data: anecdoteId
//   }
// }

export const {setAnecdotes, appendAnecdote, voteAnecdote, newAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer