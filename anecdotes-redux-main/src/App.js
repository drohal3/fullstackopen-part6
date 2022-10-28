import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initAnecdotes, voteAnecdote } from "./reducers/anecdoteReducer";

import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector(state => state)

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App