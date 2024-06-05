import { apiClient } from "./ApiClient"


export const  GethelloworldBean
    = (token) => apiClient.get('/hello-world',{
        headers : {
            Authorization: token
        }
})

//tesing basic authentication to remove hardcoded authentication
export const  executeBasicAuth
    = (token) => apiClient.get('/basicAuth',{
        headers : {
            Authorization: token
        }
})

export const getHelloWorldBeanPathVariable 
    = (username,token) => apiClient.get(`/hello-world/path-variable/${username}`,{
        headers : {
            Authorization: token
        }
    })