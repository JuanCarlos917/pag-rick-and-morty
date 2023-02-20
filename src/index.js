import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//con cambia el nombre de la pestaña
let previousTitle = document.title
window.addEventListener('blur',()=>{
    previousTitle = document.title
    document.title = 'No te vayas!! Vuelve'
})

//devuelve el titulo original
window.addEventListener('focus',()=>{
    document.title = previousTitle
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
