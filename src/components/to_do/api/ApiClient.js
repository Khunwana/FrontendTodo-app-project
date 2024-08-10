import axios from "axios";

export const apiClient = axios.create({
    // baseURL : 'http://localhost:8080' 
    baseURL : 'http://please-tezting-rest-env.eba-qs3rjarg.eu-north-1.elasticbeanstalk.com/'   
})