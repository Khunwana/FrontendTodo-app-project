import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{
    //cheking if user is logged in
    const [isAuthenticated,setAuthenticated] = useState(false)
    

    function login(username,password)
    {
        if( username === 'Khunwana' && password === '1234')
            {
                setAuthenticated(true)
               return true
            }
            else
            {
                setAuthenticated(false)
                return false
            }
    }

    function logout()
    {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}