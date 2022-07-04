import React,{useState} from 'react'

export const User = () => {
    const handleLogIn = () => {}
    const handleLogOut = () => {}
    return (
      <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <div>Username is </div>
        </div>
  )
}