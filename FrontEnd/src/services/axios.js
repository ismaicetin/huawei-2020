
import axios from 'axios' 
export const API_URL = "http://localhost:4500/"  
function parseError(messages) {
    // error
    if (messages) {
        if (messages instanceof Array) {
            return Promise.reject({ messages: messages })
        } else {
            return Promise.reject({ messages: [messages] })
        }
    } else {
        return Promise.reject({ messages: ['Bir hata oluştu'] })
    }
}

function parseBody(response) {
    //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
    if (response.status !== 200) {
        console.error(response.data)
    }
    if (response.status === 200) {

        return response.data
    } else {
        return parseError(response.data.messages)
    }
}


let instance = axios.create({
    baseURL: API_URL
})


// async function refleshToken(config) {
    
//     var token = localStorage.getItem('token')
//     if (token) {
//         var a = await axios.post(`${API_URL}/refresh/`, { 'refresh': token });
//         // config.headers.jiwstmail = a.data.access;
//         config.headers.Authorization = 'Bearer ' + a.data.access

//         localStorage.setItem("newToken", a.data.access)

//     } 
//     return config
// }



 



// request header
instance.interceptors.request.use((config) => {
    const apiToken = sessionStorage.getItem('token')
    if(apiToken){ config["headers"] = { 'Authorization': apiToken }}  
    return config
   // return refleshToken(config);
    //     // Do something before request is sent 

    //     // api token
    //     // config.headers = { 'Custom-Header-IF-Exist': apiToken }
    //     const h_token =  localStorage.getItem('h_token');
    //    // alert(apiToken.token)  
    //     config['Content-Type'] = 'application/json'
    //     return config
}, error => {
return Promise.reject(error)
})





// response parse
instance.interceptors.response.use((response) => {
    console.log(response.config.url + "  =>  ");
    console.log(response.data);
    return parseBody(response)
}, error => {
    console.warn('Error status', error)
    // return Promise.reject(error)
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
})






export const http = instance