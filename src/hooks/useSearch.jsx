import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true) //                               Como el valor del useRef no cambia al renderizar vamos a utilizarlo para saber si es la primera interacción

  useEffect(() => {
    if (isFirstInput.current) { //                                   Con el useRef necesitamos el current para modificar el valor de la referencia
      isFirstInput.current = search === '' //                        Asigna el resultado de la comparación search === ''
      return //                                                      Cuando el search tenga contenido "isFirstInput.current" se fijará como false y la próxima vez que cambie el search ya no entrará en este if
    } //                                                             Este return hace que si se ejecuta el if, al llegar al return para la ejecución del efecto entero

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
