import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { showNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault() // prevent the refresh of the page
    const userAnecdote = event.target.anecdote.value
    dispatch(createAnecdote(userAnecdote))
    dispatch(showNotification(`Your anecdote has been added: ${userAnecdote}`))
    event.target.anecdote.value = '' // Clearing the form
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