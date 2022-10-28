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