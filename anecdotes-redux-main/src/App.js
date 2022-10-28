import React, {useEffect} from 'react'
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      {/*titles left here - looks better to me*/}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App