import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (query.trim() === '') {
      return
    }

    navigate(`/order/${query.trim()}`)
    setQuery('')
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchOrder
