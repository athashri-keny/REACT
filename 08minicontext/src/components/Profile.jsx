import React   , {useContext}from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) {
        return <div>Please Login</div>
    }
    return <div>Welocme {user.username}</div>
}

export default Profile