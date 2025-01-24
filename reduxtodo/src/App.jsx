import { useState } from 'react'
import React from 'react'
import './App.css'
import AddTodo from './Componets/AddTodo'
import Todos from './Componets/Todos'

function App() {
  
  return (
    <>
      <h1>learning about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
