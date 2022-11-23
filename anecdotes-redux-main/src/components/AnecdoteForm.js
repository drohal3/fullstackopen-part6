import React from "react";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { messageChange, messageReset } from "../reducers/notificationReducer";
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log('create', anecdote)
    dispatch(newAnecdote(anecdote))
    dispatch(messageChange(`Anecdote "${anecdote}" added`))
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