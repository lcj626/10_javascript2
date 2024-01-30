import { login } from "../modules/UserModule";
import { request } from "./Api";


export function callLoginApi(loginInfo){

    console.log("login api calls....");

    return async(dispatch, getState) =>{
        const userList = await request("GET", "/user");

        const result = await userList.find(
          user => user.id === loginInfo.id
          && 
          user.password === loginInfo.password);
        
        console.log("login result : ", result);

        dispatch(login(result));
    }
}