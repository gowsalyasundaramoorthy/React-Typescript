import React, { useState } from 'react'

type authUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<authUser>({} as authUser)
    const handleLogIn = () => {
        setUser ({
            name: 'Gowsalya',
            email: 'gowsalya@gmail.com',
        })
    }
    // const handleLogOut = () => {
    //     setUser(null)
    // } 
    return (
      <div>
          <button onClick={handleLogIn}>Login</button>
            {/* <button onClick={handleLogOut}>Logout</button> */}
            <div>User Name is {user.name }</div>
            <div>User Email is{user.email }</div>



        </div>
    )
}
