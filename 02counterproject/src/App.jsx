import { useState  } from 'react'
import './App.css'

function App() {

   let [counter , setCounter ] = useState(15) // default state 

  // let counter = 5

  const addValue = () => { 
    setCounter(counter + 1)
  
  } 
  const RemoveValue = () => {
   
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1> chai aur react </h1>
      <h2> Couter value: {counter}</h2>

      <button onClick={addValue}>
         Add value {counter} </button>
      <br></br>
      <button onClick={RemoveValue}> remove value {counter} </button>
      <p> footer: {counter} </p>
    </>
  )
}

export default App
