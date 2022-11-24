import React, {useEffect} from 'react'
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
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