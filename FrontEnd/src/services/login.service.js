import { http } from './axios'

async function login (sendData)  {  
 


    return  http.post("/users/authenticate", sendData)


    // await http.get("/Account/GetUserClm",{
    //     headers:{
    //         "Content-Type":'multipart/form-data',
    //         'Access-Control-Allow-Origin': '*',
    //         "withCredentials":true
    //       }
    // })


}

async function register (sendData) { 
    // return {
    //     success: true, 
    //     data: {
    //         UserId: "95dda82d-e4e2-4099-960f-d900b2c1cb61", 
    //         CardId: 533525, 
    //         UserName: "semih.uzan", 
    //         FullName: "AHMET İBRAHİM", 
    //         EMail: "semih.uzan@aliraif.com.tr",
    //             Position: ""
    //     }
    // }
    
  
    return  http.post("/users", sendData)
}

  
export default {
    login, 
    register, 
}; 
