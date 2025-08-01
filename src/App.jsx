import AnecdoteForm from './components/AnecdoteForm'
import DisplayAnecdotes from './components/DisplayAnecdotes'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
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