import './App.css'
// const API_KEY = 'e4f4280'
// const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}&`
import responseMovies from './mocks/with-results.json' /*       El archivo original "with-results.json" es un es un Json {}. Pero al importarlo como
*                                                               "responseMovies" el empaquetador Vite lo convierte en un objeto {} automáticamente. */
import { Movies } from './components/Movies'
// import withoutResults from './mocks/no-results.json'

function App () {
  const movies = responseMovies.Search // []
  console.log(movies)
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <div className='linea'>
          <form className='form'>
            <input placeholder='Avengers, Star Wars, The Matrix...' />
          </form>
          <button type='submit'>Buscar</button>
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
