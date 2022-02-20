import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from './views/SobreNosotros';
import Productos from './views/productos';
import Blog from './views/blog';
import Tienda from './views/tienda';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/footer';
ReactDOM.render(
/*    <React.StrictMode>
    <App />
  </React.StrictMode>,  */
     <BrowserRouter>
     <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Tienda" element={<Tienda />} />
      <Route path="productos" element={<Productos />} />
      <Route path="sobreNosotros" element={<SobreNosotros />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
