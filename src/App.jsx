import './App.css'
// const API_KEY = 'e4f4280'
// const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}&`

function App () {
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
        Aquí irán los resultados
      </main>
    </div>
  )
}

export default App
