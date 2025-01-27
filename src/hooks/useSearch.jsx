import { useState, useEffect } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con una número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos tres caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
