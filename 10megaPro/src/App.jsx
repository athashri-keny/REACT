import React ,  { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from '../src/Appwrite/auth.js'
import {login , logout} from './Store/auth.slice'
import { Footer } from './components/index.js'
import Header from './components/Header/header.jsx'

function App() {
  const [loading , setloading] = useState(true) //  

  const dispatch = useDispatch() // the dispatched is used for the reducers , and actions to sent the logic in the UI 
  
  useEffect(() => {
    authService.getCurrentUser()

    .then((userData) => {

      if (userData) {
        dispatch(login({userData}))

      } else {
        dispatch(logout())
      }
    })

    .finally(() => setloading(false))
  } , [])
 

  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
   <Header/>
   <main>
   TODO: {/* <Outlet/> */}
   </main>
   <Footer/>
    </div>
  </div>) : null
}

export default App
