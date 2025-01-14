import { useState , useCallback} from "react"


function App() {
 const [ length , setlength ] = useState(8)
 const [numberallow , setnumberallow] = useState(false)
 const [ charallow , setcharallow] = useState(false)
 const [passowrd , setpassowrd] = useState("")


 const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberallow) {
    str += "0123456789"
  }
  if (charallow) {
    str += "!@#$%^&*()_+=-`~[]{}|;'"

    for (let i = 1; i <= array.length; i++) {
     let char =  Math.floor( Math.random() * str.length + 1)
     pass = str.charAt(char)
    }
    setpassowrd(pass)
  }

 } , [length , numberallow , charallow , setpassowrd])
  return (
<> 
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8"> j</div>
</>
  )
}

export default App
