import { useState  } from 'react'
import './App.css'

function App() {

   let [counter , setCounter ] = useState(5) // default state 

  // let counter = 5

  const addValue = () => { 
    if(counter < 20)
    setCounter(counter + 1)
    
  } 
  const RemoveValue = () => {
    if(counter > 0)
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
