import * as types from "./types";
import axios from "axios";




export const ChecknewWord = ({url,word}) => async (dispatch) => {
   
    try{
   
    const result = await axios.post('http://localhost:8080/api/content/check',  {url,word});
    dispatch({ type: types.ADD_WORD, payload: result.contents});
    console.log(result.data.state)
    alert("accepted");
        
    }catch(e)
    {
        alert("rejected");
        console.log("error");
    }
}

export const getAuthorized = () => async (dispatch) => {

    const result = await axios.get('http://localhost:8080/api/content');
    dispatch({type:types.GET_WORD, payload: result.contents});

}
export const deleteAll = (id,url,word) => async (dispatch) => {
    
    const body ={
        id: id,
        url:url,         
        word:word };


    try{
        
    const result = await axios.delete('http://localhost:8080/api/content/supp',{data:body});

    dispatch({type:types.DELETE_WORD, payload: result.body});

    if (result.status === 200){

        alert("Delete succes")
        window.location.reload(false);
    } 

}catch(e)
{
    console.log("error");
    alert("Delete error")
}
}

/*
const getContent =(contents) => ({
    type: types.GET_WORD,
    payload:contents,
});

const addContent =() => ({
    type: types.ADD_WORD,
});

const deleteContent =() => ({
    type: types.DELETE_WORD,
});

export const loadContent = () => {
    return function (dispatch){
        axios.get('${process.env.REACT_APP_API}/content')
        .then((resp) => {
            console.log("resp",resp);
            dispatch(getContent(resp.data));
        })
        .catch((error) => console.log(error));
        
    };
};

export const AddContent = () => {
    return function (dispatch){
        axios.post('${process.env.REACT_APP_API}/content/check')
        .then((resp) => {
            console.log("resp",resp);
            dispatch(addContent(resp.data));
        })
        .catch((error) => console.log(error));
        
    };
};*/

