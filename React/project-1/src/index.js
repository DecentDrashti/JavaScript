import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyButton from './d.js';
import Welcome from './Welcome.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Hello/>
     
    //<h1>hello world</h1>
);
function Hello(){
  return <>
  <h1 className=''>Drashti</h1><h2 style={{color:"red"}}>Ruparelia</h2>
  <MyButton/>
  <Welcome/>
  </>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
