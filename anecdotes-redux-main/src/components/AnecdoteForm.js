import React from "react";
import {appendAnecdote, newAnecdote} from "../reducers/anecdoteReducer";
import { messageChange, messageReset } from "../reducers/notificationReducer";
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log('create', anecdote)
    const newAnecdote = await anecdoteService.createNew(anecdote)
    console.log('new anecdote', newAnecdote)
    dispatch(appendAnecdote(newAnecdote))
    dispatch(messageChange(`Anecdote "${newAnecdote.content}" added`))
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