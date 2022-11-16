import axios from "axios";


export default class Service{
    ChecknewWords(contents){
        return axios.post("http://localhost:8080/api/content", contents);
    }

    getAuthorized(){
        return axios.get("http://localhost:8080/api/content");
    }
    deleteByAll(contents){
        return axios.delete("http://localhost:8080/api/content",contents)
    }
}