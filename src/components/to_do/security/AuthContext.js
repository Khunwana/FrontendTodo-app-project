import { createContext, useContext, useState } from "react";
import { executeBasicAuth } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children})
{
    //checking if user is logged in
    const [isAuthenticated,setAuthenticated] = useState(false)
    const [username,setUsername] = useState("")
    const [token,setToken] = useState(null)

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

                    apiClient.interceptors.request.use(
                        (config) => {
                            // console.log('Intercepting and adding a token')
                            config.headers.Authorization = basicAuthToken
                            return config
                        }
                    );

                 
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