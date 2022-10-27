import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const goodType = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const okType = () => {
    store.dispatch({type: 'OK'})
  }

  const badType = () => {
    store.dispatch({type: 'BAD'})
  }

  const zeroType = () => {
    store.dispatch({type: 'ZERO'})
  }

  return (
    <div>
      <button onClick={goodType}>good</button>
      <button onClick={okType}>ok</button>
      <button onClick={badType}>bad</button>
      <button onClick={zeroType}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
