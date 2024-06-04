import { createContext, useContext, useState } from "react";
import { executeBasicAuth } from "../api/HelloWorldApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{
    //cheking if user is logged in
    const [isAuthenticated,setAuthenticated] = useState(false)
    const [username,setUsername] = useState("")
    const [success,setSuccess] = useState()

    function testing(response)
    {
        console.log(response)
    }

    async function login(username,password)
    {
        const basicAuthToken = 'Basic '+ window.btoa(username + ":" + password)
        const response = await executeBasicAuth(basicAuthToken)
       
        if( response.status == 200)
            {
                setAuthenticated(true)
                setUsername(username)
               return true
            }
            else
            {
                setAuthenticated(false)
                return false
            }
        setAuthenticated(false)
    }

    function logout()
    {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}