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
  const [error, setError] = useState(null)

  const handleSubmit = (event) => { //                        Este método se ejecuta al pulsar el botón
    event.preventDefault() //                                 Al pasar el "event" nos permite bloquar que recargue la pagina utilizando "event.preventDefault()" cuando se dispara el evento
    console.log({ query })
  }

  const handleChange = (event) => { //                        Se ejecuta cada vez que cambia el valor del texto
  //                                                          Esta función está asociada al input por la propiedad onChange que dispara la función cada vez que cambia la información
    const newQuery = event.target.value //                    "event.target" es una referencia al elemento que disparó el evento (<input> en este caso)
    setQuery(newQuery)

    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con una número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos tres caracteres')
      return
    }

    setError(null)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange} //                       Asocia el cambio en el input a la función
            value={query} //                                 La propiedad "value={query}" se utiliza para hacer que el campo de texto sea controlado,
            name='query'//                                   asegura que el valor visible del campo de texto siempre coincida con el valor del estado query
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
