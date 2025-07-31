import AnecdoteForm from './components/AnecdoteForm'
import DisplayAnecdotes from './components/DisplayAnecdotes'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <DisplayAnecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App