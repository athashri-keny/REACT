import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/Config'
import {logout} from '../../Store/auth.slice' 


// used for logging out the user 

function Logoutbtn() {
    const disPatch = useDispatch() // dispatch helps to change the current state of the component
    
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            disPatch(logout())
        })
    }
    
  return (
   <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
    Logout</button>
  )
}

export default Logoutbtn