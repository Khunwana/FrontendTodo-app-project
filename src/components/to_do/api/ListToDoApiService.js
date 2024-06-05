import { apiClient } from "./ApiClient"

const apiRequestAuth = (token) =>{
    return {
        headers : {
            Authorization: token
        }
    }
}

export  const retrieveAllToDoForusername 
    = (username,token) => apiClient.get(`/users/${username}/todos`,
    apiRequestAuth(token))

export const deleteTo_DoApi
         = (id,username,token) => apiClient.delete(`/users/${username}/todos/${id}`,
         apiRequestAuth(token))

export const retrieveTo_DoApi 
        = (id,username,token) => apiClient.get(`/users/${username}/todos/${id}`,
        apiRequestAuth(token))

export const updateTo_DoApi 
        = (id,username,toDo,token) => apiClient.put(`/users/${username}/todos/${id}`,toDo,
        apiRequestAuth(token))

export const createTo_DoApi 
        = (username,toDo,token) => apiClient.post(`/users/${username}/todos`,toDo,
        apiRequestAuth(token))