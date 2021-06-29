import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/about'>Ir para pagina sobre</Link>
      <h1>Esse é a nossa Home page</h1>
    </div>
  )
}



export default Home
