import { useState } from "react"


function App() {
 const [color , setcolor] = useState("olive") 
  return (
  <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
  >
   <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full text-1xl text-white "> 
    <button className="outline-none px-4 " style={{backgroundColor: "red"}} onClick={() => setcolor("red")}> Red </button> 
    <button className="outline-none px-4 " style={{backgroundColor: "green"}} onClick={() => setcolor("green")}> green </button> 
    <button className="outline-none px-4 " style={{backgroundColor: "blue"}}   onClick={() => setcolor("blue")}>  blue </button>   
    <button className="outline-none px-4 " style={{backgroundColor: "purple"}} onClick={() => setcolor("purple")}> purple </button>
    <button className="outline-none px-4 " style={{backgroundColor: "black"}} onClick={() => setcolor("black")}> Black </button>
    0
       </div>
    </div> 
  </div> 
  )
}

export default App
