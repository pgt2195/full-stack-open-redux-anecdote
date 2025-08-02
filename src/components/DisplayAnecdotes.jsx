import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { sortAndFilter } from '../utils/utils'

const DisplayAnecdotes = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const anecdotesToDisplay = sortAndFilter(anecdotes, filter)

  const vote = (anecdote) => {
    dispatch(voteFor(anecdote.id))
    dispatch(showNotification(`Your vote has been registered for: ${anecdote.content}`, 5))
  }


  return (
    <div>
      {anecdotesToDisplay.map(anecdote =>
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