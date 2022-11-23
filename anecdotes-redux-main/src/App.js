import React, {useEffect} from 'react'
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      {/*titles left here - looks better to me*/}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App