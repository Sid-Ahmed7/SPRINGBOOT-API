import axios from "axios";
import { deleteAll } from "../actions/projet";
import React, { useEffect, useState } from "react";


import {useDispatch} from "react-redux";



const ListeAuthorized  = () => {
   const [contents,setContent] = useState([]);
   const dispatch = useDispatch();
   
useEffect(() => {
  try{

  axios.get("http://localhost:8080/api/content").then( response => {
 
    if (response.status === 200) {
    setContent(response.data);
    console.log("Succes");
    }

  });
} catch (e) {
  console.error("ERROR");
}

}, []);


const result = contents.map((data,key) => {
  return(
    <tr key = {key}>
    <td>{data.id}</td>
    <td>{data.url}</td>
    <td>{data.word}</td>
    <td>
<div className="btn-group" role="group" aria-label="Basic example"></div>
<button type="button" onClick={() =>dispatch(deleteAll(data.id,data.url,data.word)) } className="btn btn-danger">Delete</button>
    </td>
    </tr>
  
  );
});
console.log(result)


  return (

    <div className="container">
    <br />
<table className="table table-success table-striped">

<thead>
 <tr>
 <th scope="col">id</th>
 <th scope="col">URL</th>
 <th scope="col">Word</th>
 <th scope="col">Option</th>
 </tr>
 </thead>
 <tbody>
  {result}
 </tbody>
 
</table>

</div>
  )
  }

  export default ListeAuthorized



  



