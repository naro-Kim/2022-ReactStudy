import axios from "axios";
// 로그인 api 주소
const API_URL = "http://localhost:8080/api/auth/"; 
class AuthService {
    login(username: string, password: string){
        return axios
        .post(API_URL + "signin",{
            username,
            password
        })
        .then(response =>{
            //response 응답에 accessToken이 존재하면
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data
        });
    }
    logout(){
        //로컬스토리지에서 유저삭제
        localStorage.removeItem("user"); 
    }
    register(username: string, phonenumber: string, password:string){
        return axios.post(API_URL + "signup", {
            username,
            phonenumber,
            password
        });
    }
    getCurrentUser(){
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}
export default new AuthService();