import { useState } from 'react'
import { searchMovies } from '../services/movies.js'
// import withoutResults from '../mocks/no-results.json'
// import withResults from '../mocks/with-results.json' /*       El archivo original "with-results.json" es un es un Json {}. Pero al importarlo como
/*                                                                  "responseMovies" el empaquetador Vite lo convierte en un objeto {} automáticamente. */

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}
