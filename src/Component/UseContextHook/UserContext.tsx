import React,{createContext, useState}  from 'react'



export type authUser =  {
    name: string,
    email: string
}
type userContextProviderProps = {
    children: React.ReactNode
}
export const UserContext = createContext(null)
export const UserContextProvider = ({ children }: userContextProviderProps ) =>{
   const [user, setUser] = useState(null) 
}
