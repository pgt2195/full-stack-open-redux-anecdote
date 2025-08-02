import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { showNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault() // prevent the refresh of the page

    const newAnecdote = await anecdoteService.createNew(event.target.anecdote.value)
    dispatch(createAnecdote(newAnecdote))
    dispatch(showNotification(`Your anecdote has been added: ${newAnecdote.content}`))
    // Clearing the form
    event.target.anecdote.value = ''
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm