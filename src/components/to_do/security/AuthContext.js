import { createContext, useContext, useState } from "react";
import { executeBasicAuth } from "../api/HelloWorldApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{
    //cheking if user is logged in
    const [isAuthenticated,setAuthenticated] = useState(false)
    const [username,setUsername] = useState("")
    const [token,setToken] = useState(null)

    function testing(response)
    {
        console.log(response)
    }

    async function login(username,password)
    {
        const basicAuthToken = 'Basic '+ window.btoa(username + ":" + password)
        try{

            const response = await executeBasicAuth(basicAuthToken)
           
            if( response.status == 200)
                {
                    setAuthenticated(true)
                    setUsername(username)
                    setToken(basicAuthToken)
                    return true
                }
                else
                {
                    logout()
                    return false
                }
            }
        catch(error)
        {
            logout()
            return false
        }
        
    }
    
    function logout()
    {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
    )
}