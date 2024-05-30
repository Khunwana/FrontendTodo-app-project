import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:8080'
    
})
export default function GethelloworldBean()
{
    return apiClient.get('/hello-world',{
            auth:{
                username: 'username',
                password: 'password'
            },
            headers:{
                'Content-Type' : 'application/json'
            }

         })
}

export const getHelloWorldBeanPathVariable 
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)