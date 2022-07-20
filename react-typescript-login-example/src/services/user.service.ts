import axios from "axios";
import authHeader from "./auth-header";
const API_URL= "http://localhost:8080/api/test/";
class UserService{
    getPublicContent(){
        return axios.get(API_URL + 'all');
    }
    // Autorizzation 여부와 JWT 반환해 headers에 쓰고, 해당하는 유저 data를 GET
    getUserBoard(){
        return axios.get(API_URL + 'user', {
            headers: authHeader()
        });
    }
    getModeratorBoard(){
        return axios.get(API_URL + 'mod', {
            headers: authHeader()
        });
    }
    getAdminBoard(){
        return axios.get(API_URL + 'admin', {
            headers: authHeader()
        });
    }
}
export default new UserService();
