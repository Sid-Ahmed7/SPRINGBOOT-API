import React from 'react';
import { Link } from 'react-router-dom';


export default function AppNav() {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <div className="container-fluid">
 <a className="navbar-brand" href="/">Check Word</a>
<ul>
    <li>
   

    <Link to='/check' className="btn btn-primary" role="button" data-bs-toggle="button">ListeAuthorized</Link>
    </li>
</ul>
 </div>
 
</nav>
</div>
)
}
