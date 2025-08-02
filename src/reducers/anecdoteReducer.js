import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(_state, action) {
      return action.payload
    },
    addAnecdote(state, action) {
      return state.concat(action.payload)
    },
    addVote(state, action) {
      return state.map(anecdote => {
        if (anecdote.id === action.payload.id) {
          return {...anecdote, votes: action.payload.votes}
        } return anecdote
      })
    }
  }
})

export const { addAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export const voteFor = id => {
  return async dispatch => {
    const newVotes = await anecdoteService.addVote(id)
    dispatch(addVote(newVotes))
  }
}

export default anecdoteSlice.reducer