export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
        }
    </ul>
  )
}

export function NoMoviesResults () {
  return (
    <p>No existen películas con ese título</p>
  )
}

export function Movies (props) { //                     Recogemos la propiedad "listMovies" de las props recibidas y creamos una variable con el mismo nombre
  const hasMovies = props.listMovies?.length > 0 //                    "?." -> Operador de encadenamiento opcional (optional chaining). Este operador permite que la expresión no arroje un error si la variable que lo precede (en este caso, movies) es null o undefined
  //                                                             .lenght es un propiedad de los arrays en JavaScript que devuelve el número de elementos dentro del arreglo

  return (
    hasMovies
      ? <ListOfMovies movies={props.listMovies} />
      : <NoMoviesResults />
  )
}
