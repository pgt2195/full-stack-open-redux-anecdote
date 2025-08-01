import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'

const DisplayAnecdotes = () => {
  
  const anecdotes = useSelector(state => {
    const anecdotesToDisplay = state.anecdotes.sort((a, b) => b.votes - a.votes)
    if (state.filter === 'ALL') {
      return anecdotesToDisplay
    }
    return anecdotesToDisplay.filter(anecdote => 
      anecdote.content.toLowerCase().includes(state.filter)
    )
  })

  const dispatch = useDispatch()

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