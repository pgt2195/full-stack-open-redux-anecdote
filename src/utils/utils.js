const sortAndFilter = (anecdotes, filter) => {
    return anecdotes
            .filter(anecdote =>
            anecdote.content.toLowerCase().includes(filter)
            )
            .sort((a, b) => b.votes - a.votes)
}

export {sortAndFilter}