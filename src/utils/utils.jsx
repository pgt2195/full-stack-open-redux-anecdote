const getAnecdote = (anecdotes, id) => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    return anecdote.content
}

export { getAnecdote }