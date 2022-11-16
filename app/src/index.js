import React, { StrictMode } from 'react';
import  ReactDOM  from 'react-dom';
import  {createRoot}  from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import store from './reducers/redux/store';
import { Provider } from 'react-redux';


const container = document.getElementById('App');
const root = createRoot(container);
root.render(
    <StrictMode>
<Provider store={store}>
<App />
</Provider>

</StrictMode>
);
