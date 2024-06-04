import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:8080'
    
})
// export default function GethelloworldBean()
// {
//     return apiClient.get('/hello-world',{
//             auth:{
//                 username: 'username',
//                 password: 'password'
//             },
//             headers:{
//                 'Content-Type' : 'application/json'
//             }

//          })
// }

export const  GethelloworldBean
    = (username) => apiClient.get('/hello-world',{
        headers : {
            Authorization: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
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
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)