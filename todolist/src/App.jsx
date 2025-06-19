import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from'./list.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Todo App</a>
      </nav>
      <div className="container mt-4">
        <List />
      </div>
    </>
    </>
  )
}

export default App
