
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/Theme'
import Card from './Components/Card'

function App() {
 const [themeMode , setThemeMode] = useState("light") // default value will be white
  
 // defining the functions of the method
 const LightTheme = () => {
  setThemeMode("Light")
 }

 const darkTheme = () => {
  setThemeMode("dark")
 }
 // actual change in theme

 useEffect(() => { 
document.querySelector('html').classList.remove("light")
document.querySelector('html').classList.add(themeMode)
 }, [themeMode])
 

  return (
    <ThemeProvider value={{themeMode , LightTheme , darkTheme}}> {/* having the access of the Themecontext and it will be used further */}
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>
                       <Card/>
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
