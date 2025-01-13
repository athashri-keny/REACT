import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)


  function addvalue() {
    setCount(count + 1)
  }

  function removevalue() {
    setCount(count - 1)
  }


  return (
    <>
    <p className='text-5xl font-bold p-8'>{count} <Card username="hi "/> </p>
      <h1 className='p-5'> Set Counter </h1>
     <button className='p-4' onClick={addvalue}>ADD value <Card user = "I AM MUSIC" /></button>
     <button onClick={removevalue}> Remove value </button>
    </>
  )
}

export default App
