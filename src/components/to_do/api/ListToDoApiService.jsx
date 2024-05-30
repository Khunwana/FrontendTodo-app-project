import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:8080'    
})

export  const retrieveAllToDoForusername 
    = (username) => apiClient.get(`/users/${username}/todos`,{
            auth:{
                username: 'username',
                password: 'password'
            },
            headers:{
                'Content-Type' : 'application/json'
            }

         })

export const deleteTo_Do 
    = (id,username) => apiClient.delete(`/users/${username}/todos/${id}`,{
        auth:{
            username: 'username',
            password: 'password'
        },
        headers:{
            'Content-Type' : 'application/json'
        }
})