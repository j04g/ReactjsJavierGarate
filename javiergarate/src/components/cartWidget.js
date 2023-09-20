import React from 'react';
import carritoImage from '../images/carrito.jpg'; // La ruta es relativa a la carpeta "src"

const CartWidget = () => {
  return (
    <div>
      <img src={carritoImage} alt="Carrito de compras" width="60" height="60" />
      {/* Puedes personalizar la imagen o el ícono del carrito según tus necesidades */}
    </div>
  );
}
export default CartWidget;
