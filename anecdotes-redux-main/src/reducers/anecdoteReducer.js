const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      const newAnecdote = asObject(action.data)
      console.log('new anecdote', newAnecdote)

      return [...state, newAnecdote]
    case 'VOTE_ANECDOTE':
      const anecdoteId = action.data
      const newState = state.map(anecdote => anecdote.id !==  anecdoteId ? anecdote : {...anecdote, votes: anecdote.votes + 1})
      console.log('newState', newState)

      return newState
  }

  return state
}

export const initAnecdotes = () => {
  return {
    type: 'INIT_ANECDOTES',
    data: initialState,
  }
}

export const newAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}

export const voteAnecdote = (anecdoteId) => {
  return {
    type: 'VOTE_ANECDOTE',
    data: anecdoteId
  }
}

export default reducer