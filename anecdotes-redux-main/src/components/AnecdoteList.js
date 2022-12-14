import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const vote = (anecdote) => {
    const id = anecdote.id
    console.log('vote', id)
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`You voted for "${anecdote.content}". Vote more!`, 5))
  }

  const filter = useSelector(state => state.filter)

  return (
    <div>
      {[...anecdotes].filter(a => a.content.includes(filter)).sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList