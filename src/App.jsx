import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import DisplayAnecdotes from './components/DisplayAnecdotes'
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const dispatch = useDispatch()

  // Assigne les anecdotes du backend au state correspondant
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <DisplayAnecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App