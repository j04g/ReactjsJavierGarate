import React from 'react';
import Navbar from './components/NavBar';
//import Card from './components/Card';
import Footer from './components/Footer';
//import ItemCount from './components/ItemCount';
import ProductList from './components/Productos'; // Agrega esta línea para importar ProductList

const App = () => {
  return (
    <div>
      <Navbar />
      {<ProductList />}
      {/* productos */}
      {/* Otros componentes y contenido */}
      <Footer />
    </div>
  );
}
export default App;
