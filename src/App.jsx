import AnecdoteForm from './components/AnecdoteForm'
import DisplayAnecdotes from './components/DisplayAnecdotes'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <DisplayAnecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App