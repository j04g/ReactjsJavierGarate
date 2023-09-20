import Card from './Card';
import ItemCount from './itemCount';
import React, { useState } from 'react';
import '../styles/ProductList.css';
import SearchBar from './searchbar';


import avocadoToastImage from '../images/avocado toast.jpg';
import frenchToastImage from '../images/french-toast-3.jpeg';
import huevosRevueltosImage from '../images/huevos revueltos.jpg';
import croissantImage from '../images/croissant.jpg';
import yogurImage from '../images/Granola bowl.jpg';
import tostadasImage from '../images/tostado-jam-cheese-argentina-jamon-y-queso.jpg';
import pancakeImage from '../images/pancake.jpg';
import sandwichCrudoImage from '../images/sandwich crudo.jpg';
import omeletteImage from '../images/omelette.jpg';
import hamburguesaImage from '../images/hamburguesa.jpg';
import veggieBurgerImage from '../images/veggie burger.jpg';
import ensaladaCaesarImage from '../images/CaesarSalad.jpg';
import wrapVeggieImage from '../images/wrap veggie.jpg';
import wrapPolloImage from '../images/wrap.jpg';
import wrapPulledPorkImage from '../images/wrap pulled pork.jpg';
import ensaladaCobbImage from '../images/cobb-salad.jpg';
import tiramisuImage from '../images/Tiramisu.jpg';
import rogelImage from '../images/rogell.jpg';
import marquiseImage from '../images/marquise.jpg';
import lemonPieImage from '../images/lemon pie.jpg';
import keyLimePieImage from '../images/Klp.jpg';
import cheesecakeImage from '../images/cheesecake.jpg';
import alfajoresImage from '../images/alfajores.jpg';
import carrotCakeImage from '../images/Carrot cakke.jpg';


const ProductList = () => {
  // Datos de ejemplo para los "Cards"
  const products = [
        {
        id: 101,
        nombre: "Avocado Toast",
        categoria: "desayunos y meriendas",
        precio: 1500,
        stock: 20,
        descripcion:"Toast Tostón, palta y huevo acompañado de tomates cherry.",
        img: avocadoToastImage
      },
    
      {
        id: 102,
        nombre: "French Toast",
        categoria: "desayunos y meriendas",
        precio: 1250,
        stock: 20,
        descripcion:"Dos tostadas francesas acompañadas de frutas de estación y caramelo.",
        img: frenchToastImage
      },
      {
        id: 103,
        nombre: "Huevos Revueltos",
        categoria: "desayunos y meriendas",
        precio: 1050,
        stock: 20, 
        descripcion:"Huevos revueltos con toston, panceta o palta acompañado de tomates cherrys.",
        img: huevosRevueltosImage
      },
      {
        id: 104,
        nombre: "Croissant relleno",
        categoria: "desayunos y meriendas",
        precio: 1000,
        stock: 20,
        descripcion:"Croissant De jamón y queso.",
        img: croissantImage
      },
      {
        id: 105,
        nombre: "Yogur de la casa",
        categoria: "desayunos y meriendas",
        precio: 1800,
        stock: 20,
        descripcion:"Yogur con Granola Casera y Frutas de Estación Yogur casero, granola y frutas de estación.",
        img: yogurImage
      },
      {
        id: 106,
        nombre: "Tostadas",
        categoria: "desayunos y meriendas",
        precio: 900,
        stock: 20,
        descripcion:"Dos tostadas acompañadas de queso crema y mermelada.",
        img: tostadasImage 
      },
      {
        id: 107,
        nombre: "Pancake Proteico",
        categoria: "desayunos y meriendas",
        precio: 1150,
        stock: 20,
        descripcion:"Pancake de avena y banana con matequilla de maní, mermelada, frutas de estación y caramelo.",
        img: pancakeImage
      },
      
      {
        id: 108,
        nombre: "Sandwich de Crudo Jamón crudo",
        categoria: "desayunos y meriendas",
        precio: 1550,
        stock: 20,
        descripcion:"Sandwich de Crudo Jamón crudo, rúcula, tomate y queso.",
        img: sandwichCrudoImage
      },
      {
        id: 109,
        nombre: "Omelette De jamón y queso",
        categoria: "desayunos y meriendas",
        precio: 1750,
        stock: 20,
        descripcion: "Omelette De jamón y queso acompañado de tomates cherry. De queso, tomate y albahaca, acompañado de tomates cherry." , 
        img: omeletteImage
      },
    
    {
        id: 201,
        nombre: "Hamburguesas Tranca la Palanca",
        categoria: "Platos principales",
        precio: 2000,
        stock: 20,
        descripcion:"Dos medallones de carne, panceta, cebolla caramelizada, queso cheddar y huevo.",
        img: hamburguesaImage
      },
      {
        id: 202,
        nombre: "Veggie burguer",
        categoria: "Platos principales",
        precio: 2050,
        stock: 20,
        descripcion:"Hamburguesa vegetariana cebolla caramelizada, queso danbo, palta y mayonesa de zanahoria.",
        img: veggieBurgerImage
      },
      {
        id: 203,
        nombre: "Ensalada Caesar",
        categoria: "Platos principales",
        precio: 2100,
        stock: 20,
        descripcion:"Ensalada, pollo, tomates, queso parmesano, semillas, croutones y vinagreta especial de mayonesa y anchoas.",
        img: ensaladaCaesarImage
      },
      {
        id: 204,
        nombre: "Wrap Veggie",
        categoria: "Platos principales",
        precio: 2150,
        stock: 20,
        descripcion:"Verduras salteadas, queso crema con ciboulette, huevo y palta.",
        img: wrapVeggieImage
      },
      {
        id: 205,
        nombre: "Wrap Pollo",
        categoria: "Platos principales",
        precio: 2200,
        stock: 20,
        descripcion:"Pollo, queso crema con ciboulette, cebolla caramelizada, palta y espinaca.",
        img: wrapPolloImage
      },
      {
        id: 206,
        nombre: "Wrap Pulled Pork",
        categoria: "Platos principales",
        precio: 2250,
        stock: 20,
        descripcion:"Bondiola braseada con barbacoa y coleslaw.",
        img: wrapPulledPorkImage
      },
        {
        id: 207,
        nombre: "Ensalada Cobb",
        categoria: "Platos principales",
        precio: 2350,
        stock: 20,
        descripcion:"Verdes, pollo, panceta, queso azul, palta y tomate.",
        img: ensaladaCobbImage
      },
      {
        id: 301,
        nombre: "Tiramisú",
        categoria: "Tortas, postres y delicias",
        precio: 1000,
        stock: 20,
        descripcion:"Clásico postre italiano con vainillas, almíbar de café y crema mascarpone.",
        Formato: "porción individual",
        img: tiramisuImage
      },
      {
        id: 302,
        nombre: "Rogel",
        categoria: "Tortas, postres y delicias",
        precio: 1100,
        stock: 20,
        descripcion:"Especialidad de la casa con más de 10 capas de masa y dulce de leche bajo una montaña de merengue.",
        img: rogelImage
      },
      {
        id: 303,
        nombre: "Marquise",
        categoria: "Tortas, postres y delicias",
        precio: 1150,
        stock: 20,
        descripcion:"Base bombón de chocolate con dulce de leche y merengue.",
        img: marquiseImage
      },
      {
        id: 304,
        nombre: "Lemon pie",
        categoria: "Tortas, postres y delicias",
        precio: 1200,
        stock: 20,
        descripcion:"Clásico internacional si los hay: tarta de limón y merengue.",
        img: lemonPieImage
      },
      {
        id: 305,
        nombre: "Key Lime Pie",
        categoria: "Tortas, postres y delicias",
        precio: 1250,
        stock: 20,
        descripcion:"Torta de crema de jugo de limas y leche condensada en su base de cookie crumbs.",
        img: keyLimePieImage
      },
      {
        id: 306,
        nombre: "Cheesecake",
        categoria: "Tortas, postres y delicias",
        precio: 1300,
        stock: 20,
        descripcion:"Cheesecake de chocolate blanco, bañada en salsa de frutos rojos.",
        img: cheesecakeImage
      },
      {
        id: 307,
        nombre: "Alfajores",
        categoria: "Tortas, postres y delicias",
        precio: 1350,
        stock: 20,
        descripcion:"Alfajor gigante relleno de dulce de leche, a elección: maicena, chocolate negro o blanco, de nuezo o almendra",
        img: alfajoresImage
      },
       {
        id: 308,
        nombre: "Carrot Cake",
        categoria: "Tortas, postres y delicias",
        precio: 1400,
        stock: 20,
        descripcion:"Esponjoso bizcochuelo a base de zanahoria dulce, relleno de frutos secos y pasas de uva y relleno de crema unctuosa especial.",
        img: carrotCakeImage
      },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = ({ term, category, minPrice, maxPrice }) => {
    // Filtramos los productos según los criterios de búsqueda
    const filtered = products.filter((product) => {
      const productName = product.nombre.toLowerCase();
      const productCategory = product.categoria.toLowerCase();
      const productPrice = parseFloat(product.precio);

      const matchesTerm = productName.includes(term.toLowerCase());
      const matchesCategory = productCategory.includes(category.toLowerCase());
      const isWithinPriceRange =
        (isNaN(minPrice) || productPrice >= minPrice) &&
        (isNaN(maxPrice) || productPrice <= maxPrice);

      return matchesTerm && matchesCategory && isWithinPriceRange;
    });

    // Actualizamos el estado con los productos filtrados
    setFilteredProducts(filtered);
  };

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { product, quantity }]);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Card key={product.id} producto={product} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};



export default ProductList;
