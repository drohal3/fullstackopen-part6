import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { messageChange, messageReset } from "../reducers/notificationReducer";
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    dispatch(createAnecdote(anecdote))
    dispatch(messageChange(`Anecdote "${anecdote.content}" added`))
    setTimeout(() => {
      dispatch(messageReset())
    }, 5000)
  }

  return (
    <form onSubmit={create}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm