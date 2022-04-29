import { useState } from 'react'
import Budget from './components/Budget'
import PetBrowser from './components/PetBrowser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Shelter</h1>
        <Budget />
        <PetBrowser />
      </header>
    </div>
  )
}

export default App
