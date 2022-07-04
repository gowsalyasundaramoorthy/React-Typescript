import React,{useState} from 'react'



export const LoggedIn = () => {
    const handleLogIn = () => {
        setIsLoggedIn(true)
     }
    const handleLogOut = () => { 
        setIsLoggedIn(false)
    }
    
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    return (
      <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>User is {isLoggedIn ? 'LoggedIn' : 'Loggedout'} </div>
        </div>
  )
}
