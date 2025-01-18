import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {  // children means jo abhi aa raha usse direct pass kardo
    const [user , setUser] = React.useState(null)

  return(
    <UserContext.Provider value={{user , setUser}}> {/* sets the value which the we want*/}
    {children}
    </UserContext.Provider>
  ) 

}
export default UserContextProvider