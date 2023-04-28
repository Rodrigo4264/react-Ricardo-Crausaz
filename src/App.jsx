import { useState } from 'react'
import Navbar from './Components/NAvbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  const mensaje = 'Bienvnenidos a el mejor lugar para encontrar tu libro favorito'

  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={mensaje}/>
    </div>
  )
}

export default App
