import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      {/*titles left here - looks better to me*/}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App