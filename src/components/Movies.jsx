export function ListOfMovies ({ movies }) {
  return (
    <ul>  {/*                                        Para utilizar epxresiones JavaScript como variables, funciones, metodos.. siempre hay que utilizarlas entre llaves {} */}
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
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

//                                                    Normalmente se pone (props) y dentro de la funcion accedes utilizando "props.listMovies"
export function Movies ({ listMovies }) { //          De esta forma cogemos directamente la propiedad "listMovies" de las props recibidas y creamos una variable con el mismo nombre.
  const hasMovies = listMovies?.length > 0 //         "?." -> Operador de encadenamiento opcional (optional chaining). Este operador permite que la expresión no arroje un error si la variable que lo precede (en este caso, movies) es null o undefined
  //                                                  .lenght es un propiedad de los arrays en JavaScript que devuelve el número de elementos dentro del arreglo

  return (
    hasMovies
      ? <ListOfMovies movies={listMovies} />
      : <NoMoviesResults />
  )
}
