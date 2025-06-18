import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Hello from './hello.jsx'
import Todolist from './task 3.jsx'

function App() {
 
  return (
    <>
     {/* <Counter />
     <Hello /> */}
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Todo App</a>
      </nav>
      <div className="container mt-4">
        <Todolist />
      </div>
    </>
  )
}

export default App

