import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const create = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    props.createAnecdote(anecdote)
    props.setNotification(`Anecdote "${anecdote}" added`, 5)
  }

  return (
    <form onSubmit={create}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm