import React,{createContext, useState}  from 'react'



export type authUser =  {
    name: string,
    email: string
}

type UserContextType = {
    user: authUser | null,
    setUser: React.Dispatch<React.SetStateAction<authUser | null>>
}
type UserContextProviderProps = {
    children: React.ReactNode
}
export const UserContext = createContext<UserContextType | null>(null)
export const UserContextProvider = ({ children }: UserContextProviderProps ) =>{
    const [user, setUser] = useState<authUser | null>(null) 
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}
