import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const DisplayAnecdotes = () => {
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const anecdotesToDisplay = [...anecdotes].sort((a, b) => b.votes - a.votes) // Tri les anecdotes par nombre de vote
    // Retourne les anecdotes filtrées avec state.filter
    return anecdotesToDisplay.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter)
    )
  })

  const vote = (anecdote) => {
    dispatch(voteFor(anecdote.id))
    dispatch(showNotification(`Your vote has been registered for: ${anecdote.content}`))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{marginBottom: 10}}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplayAnecdotes