import { useState } from 'react'
import withoutResults from '../mocks/no-results.json'
// import withResults from '../mocks/with-results.json' /*       El archivo original "with-results.json" es un es un Json {}. Pero al importarlo como
/*                                                                  "responseMovies" el empaquetador Vite lo convierte en un objeto {} automáticamente. */
// const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}&`
const API_KEY = 'e4f4280'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search //                       [] Movies contiene un array con un objeto por cada pelicula []
  const mappedMovies = movies?.map(movie => ({ //               Mapeando a así los datos de la API conseguimos controlar la forma en la que se tratan los datos, si la API
    id: movie.imdbID, //                                        cambiar la forma en la que envía los datos solo tenemos que hacer cambios aquí y no en cada sitio donde se utilicen los datos
    title: movie.Title, //                                      Ahora mappedMovies contiene un array con objetos, uno por cada pelicula, donde en cada objeto definimos los nuevos nombres de las propiedades
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      // setResponseMovies(withResults)
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json) //                             Al actualizar el estado de "responseMovies" se renderiza de nuevo la App y al volver a ejectutar
        }) //                                                    useMovies ya tiendo el json de las peliculas dentro de "responseMovies". De esta forma se mapea y devuelve el contenido
    } else { //                                                  de las peliculas en el return para en la APP que lo coja el componente <Movies /> y lo muestre
      setResponseMovies(withoutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
