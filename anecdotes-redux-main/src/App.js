import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initAnecdotes, voteAnecdote, newAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector(state => state)

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }

  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log('create', anecdote)
    dispatch(newAnecdote(anecdote))
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
      <form onSubmit={create}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App