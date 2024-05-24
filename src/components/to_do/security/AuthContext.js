import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{
    const [number,setNumber]=useState(0)

    //cheking if user is logged in
    const [isAuthenticated,setAuthenticated] = useState(false)

    //checking if number state is being updated 
    
    // setInterval( () => setNumber(number+1),10000)
    return (
        <AuthContext.Provider value={{number,isAuthenticated,setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}