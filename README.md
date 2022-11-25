# Fullstack Open - Part6: State management with Redux
Part 6 of the Full Stack online course https://fullstackopen.com/en/part6

## Exercise 6.1: unicafe revisited, step1
**Task:**
Before implementing the functionality of the UI, let's implement the functionality required by the store.

We have to save the number of each kind of feedback to the store, so the form of the state in the store is:
```
{
good: 5,
ok: 4,
bad: 2
}
```
The project has the following base for a reducer:
```
const initialState = {
good: 0,
ok: 0,
bad: 0
}

const counterReducer = (state = initialState, action) => {
console.log(action)
switch (action.type) {
case 'GOOD':
return state
case 'OK':
return state
case 'BAD':
return state
case 'ZERO':
return state
default: return state
}

}

export default counterReducer
```
and a base for its tests
```
import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
const initialState = {
good: 0,
ok: 0,
bad: 0
}

test('should return a proper initial state when called with undefined state', () => {
const state = {}
const action = {
type: 'DO_NOTHING'
}

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
})

test('good is incremented', () => {
const action = {
type: 'GOOD'
}
const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
})
})
```
Implement the reducer and its tests.

In the tests, make sure that the reducer is an immutable function with the deep-freeze-library. Ensure that the provided first test passes, because Redux expects that the reducer returns a sensible original state when it is called so that the first parameter state, which represents the previous state, is undefined.

Start by expanding the reducer so that both tests pass. Then add the rest of the tests, and finally the functionality which they are testing.

A good model for the reducer is the [redux-notes example](https://fullstackopen.com/en/part6/flux_architecture_and_redux#pure-functions-immutable) in the material.

**Solution:**
Implemented as instructed.

## Exercise 6.2: unicafe revisited, step2
**Task:**
Now implement the actual functionality of the application.

Note that since all the code is in the file index.js and you might need to manually reload the page after each change since the automatic reloading of the browser content does not always work for that file!

**Solution:**
Implemented in Exercise 1.

## Exercise 6.3: anecdotes, step1
**Task:**
Implement the functionality for voting anecdotes. The amount of votes must be saved to a Redux-store.

**Solution:**
Implemented as in the example exercise.

## Exercise 6.4: anecdotes, step2
**Task:**
Implement the functionality for adding new anecdotes.

You can keep the form uncontrolled, like we did [earlier](https://fullstackopen.com/en/part6/flux_architecture_and_redux#uncontrolled-form).

**Solution:**
Implemented as instructed

## Exercise 6.5: anecdotes, step3
**Task:**
Make sure that the anecdotes are ordered by the number of votes.

**Solution:**
Implemented as in one of the earlier exercises.

## Exercise 6.6: anecdotes, step4
**Task:**
If you haven't done so already, separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js file, so do like we have been doing since the chapter action creators.

**Solution:**
Already done

## Exercise 6.7: anecdotes, step5
**Task:**
Separate the creation of new anecdotes into its own component called AnecdoteForm. Move all logic for creating a new anecdote into this new component.

**Solution:**
AnecdoteForm separated into its own component 

## Exercise 6.8: anecdotes, step6
**Task:**
Separate the rendering of the anecdote list into its own component called AnecdoteList. Move all logic related to voting for an anecdote to this new component.

Now the App component should look like this:
```
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
return (
<div>
<h2>Anecdotes</h2>
<AnecdoteForm />
<AnecdoteList />
</div>
)
}

export default App
```

**Solution:**
Created onw component for anecdote list.

## Exercise 6.9 Better anecdotes, step7
**Task:**
Install Redux Toolkit for the project. Move the Redux store creation into its own file store.js and use Redux Toolkit's configureStore to create the store. Also, start using Redux DevTools to debug the application's state easier.

**Solution:**
Started using configureStore in store's separate file. Assuming no additional configuration is needed for Redux Dev Tools Chrome extension to work properly.

## Exercise 6.10 Better anecdotes, step8
**Task:**
The application has a ready-made body for the Notification component:
```
const Notification = () => {
const style = {
border: 'solid',
padding: 10,
borderWidth: 1
}
return (
<div style={style}>
render here notification...
</div>
)
}

export default Notification
```
Extend the component so that it renders the message stored in the Redux store, making the component take the following form:
```
import { useSelector } from 'react-redux'

const Notification = () => {
const notification = useSelector(/* something here */)
const style = {
border: 'solid',
padding: 10,
borderWidth: 1
}
return (
<div style={style}>
{notification}
</div>
)
}
```
You will have to make changes to the application's existing reducer. Create a separate reducer for the new functionality by using the Redux Toolkit's createSlice function. Also, refactor the application so that it uses a combined reducer as shown in this part of the course material.

The application does not have to use the Notification component in an intelligent way at this point in the exercises. It is enough for the application to display the initial value set for the message in the notificationReducer.

**Solution:**
Solution refactored as instructed.

## Exercise 6.11 Better anecdotes, step9
**Task:**
Extend the application so that it uses the Notification component to display a message for five seconds when the user votes for an anecdote or creates a new anecdote:
It's recommended to create separate [action creators](https://redux-toolkit.js.org/api/createSlice#reducers) for setting and removing notifications.

**Solution:**
Notifications show/hide implemented.

## Exercise 6.12* Better anecdotes, step10
**Task:**
Implement filtering for the anecdotes that are displayed to the user.

Store the state of the filter in the redux store. It is recommended to create a new reducer and action creators for this purpose. Implement the reducer and action creators using the Redux Toolkit's createSlice function.

Create a new Filter component for displaying the filter. You can use the following code as a template for the component:

```
const Filter = () => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
```

**Solution:** Implemented as instructed.

## Exercise 6.13 Anecdotes and the backend, step1
**Task:**
When the application launches, fetch the anecdotes from the backend implemented using json-server.

**Solution:**
Implemented as instructed.

## Exercise 6.14 Anecdotes and the backend, step2
**Task:**
Modify the creation of new anecdotes, so that the anecdotes are stored in the backend.

**Solution:**
The task did not mention voting so at this point, only creation is modified to store anecdotes in backend.

## Exercise 6.15 Anecdotes and the backend, step3
**Task:**
Modify the initialization of Redux store to happen using asynchronous action creators, which are made possible by the Redux Thunk library.

**Solution:**
Implemented as instructed.