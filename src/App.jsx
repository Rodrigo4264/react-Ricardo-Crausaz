import { useState } from 'react'
import Navbar from './Components/NAvbar/Navbar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer/>
    </div>
  )
}

export default App
