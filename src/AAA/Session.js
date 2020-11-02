import Cookies from 'js-cookie';
import { serverURL, apiEndPoints, axiosConfig } from "../Utils/Config";
import axios from 'axios';



export const getAccessToken = ()=> Cookies.get('_access_token_');


export async function auth(user){
    try {
        await axios.post(serverURL + apiEndPoints.config.authentication.loginAuth,  JSON.stringify(user), axiosConfig);
        return true;
    }catch (e) {
        console.log(e)
        if(e.response === undefined){
            return null;
        }

        if(e.response.status === 401){
            return false;
        }
        else{
            return null;
        }
    }
}

export async function isAuthenticated() {
    try {
        const resp = await axios.get(serverURL + apiEndPoints.config.authentication.isAuth, axiosConfig);
        if(resp.status === 200){
            return {authResp: true, othersProps:resp.data};
        }
    }catch (e) {
        if (!(e.response === undefined)){
            console.log('Error while checking verifying authentication, the message from server: ', await e.response.data.message);
        }
        else{
            console.log('Error while checking verifying authentication, no response');
        }
        return false;
    }
}

export async function removeAccessToken(){
   try{
       const resp = await axios.get(serverURL + apiEndPoints.authentication.logout, axiosConfig);
       return resp
   }catch (e) {
       console.log(e);
   }
}
