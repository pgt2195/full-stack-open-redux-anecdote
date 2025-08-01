import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

const DisplayAnecdotes = () => {
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const anecdotesToDisplay = [...anecdotes].sort((a, b) => b.votes - a.votes) // Tri les anecdotes par nombre de vote
    // Retourne les anecdotes filtrées avec state.filter
    return anecdotesToDisplay.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter)
    )
  })

  const vote = (id) => {
    dispatch(voteFor(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplayAnecdotes