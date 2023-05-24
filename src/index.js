import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserService from "./services/UserService";

const root = document.getElementById('root');
const renderCallBack = ()=> ReactDOM.createRoot(root).render(<App/>);
UserService.initKeycloak(renderCallBack);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
