import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat(asObject(action.payload))
    },
    voteFor(state, action) {
      return state.map(anecdote => {
        if (anecdote.id === action.payload) {
          return {...anecdote, votes: anecdote.votes + 1}
        } return anecdote
      })
    },
    setAnecdotes(_state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteFor, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer