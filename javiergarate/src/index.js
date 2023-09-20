import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bulma/css/bulma.min.css';
import searchImage from './Api';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
const fetchData = async () => {
  try {
    const response = await searchImage();
    console.log('Respuesta de la API:', response.data);
    return response;
  } catch (error) {
    console.error('Error en la API:', error);
    throw error;
  }
};

fetchData()
  .then(() => {
    const el = document.getElementById('root');
    const root = ReactDOM.createRoot(el);
    root.render(<App />);
  })
  .catch((error) => {
    console.error('Error al obtener datos de la API:', error);
    const el = document.getElementById('root');
    const root = ReactDOM.createRoot(el);
    root.render(<App />);
  });