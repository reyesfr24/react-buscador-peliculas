// const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}&`
const API_KEY = 'e4f4280'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search //                       [] Movies contiene un array con un objeto por cada pelicula []
    return movies?.map(movie => ({ //               Mapeando a así los datos de la API conseguimos controlar la forma en la que se tratan los datos, si la API
      id: movie.imdbID, //                                        cambiar la forma en la que envía los datos solo tenemos que hacer cambios aquí y no en cada sitio donde se utilicen los datos
      title: movie.Title, //                                      Ahora mappedMovies contiene un array con objetos, uno por cada pelicula, donde en cada objeto definimos los nuevos nombres de las propiedades
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error search movies')
  }
}
