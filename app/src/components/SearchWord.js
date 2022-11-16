import React, { useState } from "react";
import {ChecknewWord} from "../actions/projet"
import {useDispatch} from "react-redux";
//import  axios  from "axios";
import validator from 'validator'


const SearchWord = () =>  {

    const [url, setUrl] = useState("");
    const [word, setWord] = useState("");    
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');


const onSubmit = (e) =>{
   
    const contents = {
        url: url,
        word: word
    };
  
   if (validator.isURL(url)) {
    //axios.post("http://localhost:8080/api/content/check", contents).then( (res) => {  
        dispatch(ChecknewWord(contents));
        setUrl(e.target.value);
        setWord(e.target.value);
        //});
    }
  else {
    setMessage("URL saisie n'est pas valide")
  }

}


 return (
 <div className="container" >
   
 <div className="row">
<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
 <h2 className="text-center m-4">Rechercher un mot </h2>
 <div className="mb-3">
 <label htmlFor="name" className="form-label">URL</label> 


 <input type="{text}" className="form-control" name="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Entrez une url: https://example.com/users/" pattern ="https://.+"  ></input>
 
 </div>
 
 <div className="mb-3">
 <label htmlFor="word" className="form-label">Word</label>
 <input type="{text}" className="form-control" name="word" value={word} onChange={(e) => setWord(e.target.value)}  placeholder="Entrer un mot à rechercher" maxLength="15" ></input>
 </div>

 <p className="text-uppercase">{message}</p>

<button type="submit" className="btn btn-outline-primary mx-2" onClick={onSubmit}>Vérifier</button>
 </div> 
</div>
 </div>
 );
}


export default SearchWord;
