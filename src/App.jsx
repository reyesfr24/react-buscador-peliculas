import './App.css'
import { useState } from 'react'
/* useRef te permite tener un valor que persiste aunque se renderice el componente. Tampoco renderiza
el componente aunque cambie su valor. También guarda referencias a elementos del DOM */
// import { useRef } from 'react'
import { useMovies } from './hooks/useMovies.jsx'
// const API_KEY = 'e4f4280'
// const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}&`

import { Movies } from './components/Movies'

function App () {
  const { movies } = useMovies() //                           Custom Hook return { movies: mappedMovies }
  // const inputRef = useRef()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventdefault()
    console.log({ query })
  }
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <div className='linea'>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={query} name='query' placeholder='Avengers, Star Wars, The Matrix...' />
            <button type='submit'>Buscar</button>
          </form>
        </div>
      </header>

      <main>
        <Movies listMovies={movies} />
        {/* Cuando pasamos props que no son strings (arrays, objetos, funciones..) lo que alberga el contenido debe de ir entre llaves *
         Esto crea un objeto llamado props y le asigna propiedades con el nombre que definamos antes del signo =
         Por tanto, el componente recibe un objeto llamado "props" con una propiedad llamada listMovies que contiene el
        el valor de la variable movies, en este caso el array */}
      </main>
    </div>
  )
}

export default App
