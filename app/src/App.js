import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNav from './components/AppNav';
import SearchWord from './components/SearchWord';

import ListeAuthorized from './components/ListeAuthorized';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
     
    <Router>
    <AppNav />
<Routes>
<Route exact path="/" element ={ <SearchWord />} ></Route>
<Route exact path="/check" element={ <ListeAuthorized />}> </Route>
</Routes>
</Router> 
</div>
  
  );  
}

export default App;
