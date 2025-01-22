import './App.css'

function App () {
  return (
    <div>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
        </form>
        <button type='submit'>Buscar</button>
      </header>

      <main>
        Aquí irán los resultados
      </main>
    </div>
  )
}

export default App
