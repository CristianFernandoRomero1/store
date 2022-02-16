import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './views/contacto';
import Productos from './views/productos';
import Blog from './views/blog';
import Homepage from './views/homepage';
import ResponsiveAppBar from './components/ResponsiveAppBar';
ReactDOM.render(
/*    <React.StrictMode>
    <App />
  </React.StrictMode>,  */
     <BrowserRouter>
     <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="productos" element={<Productos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
