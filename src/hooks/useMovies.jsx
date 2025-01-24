// import withoutResults from '../mocks/no-results.json'
import responseMovies from '../mocks/with-results.json' /*       El archivo original "with-results.json" es un es un Json {}. Pero al importarlo como
*                                                               "responseMovies" el empaquetador Vite lo convierte en un objeto {} automáticamente. */
export function useMovies () {
  const movies = responseMovies.Search //                       [] Movies contiene un array con un objeto por cada pelicula []

  const mappedMovies = movies?.map(movie => ({ //               Mapeando a así los datos de la API conseguimos controlar la forma en la que se tratan los datos, si la API
    id: movie.imdbID, //                                        cambiar la forma en la que envía los datos solo tenemos que hacer cambios aquí y no en cada sitio donde se utilicen los datos
    title: movie.Title, //                                      Ahora mappedMovies contiene un array con objetos, uno por cada pelicula, donde en cada objeto definimos los nuevos nombres de las propiedades
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
